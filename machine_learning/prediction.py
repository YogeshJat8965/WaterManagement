import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# Load the datasets
df_leakage = pd.read_csv('water_leakage_data.csv')
df_synthetic = pd.read_csv('synthetic_water_meter_data.csv')

# Convert timestamp to datetime
df_leakage['timestamp'] = pd.to_datetime(df_leakage['timestamp'])
df_synthetic['timestamp'] = pd.to_datetime(df_synthetic['timestamp'])

# Generate additional features for both datasets
df_leakage['usage_per_pressure'] = df_leakage['water_usage'] / df_leakage['pressure']
df_leakage['hour'] = df_leakage['timestamp'].dt.hour

df_synthetic['usage_per_pressure'] = df_synthetic['water_usage'] / df_synthetic['pressure']
df_synthetic['hour'] = df_synthetic['timestamp'].dt.hour

# Extract features and target variable from leakage data
X_leakage = df_leakage[['water_usage', 'pressure', 'usage_per_pressure', 'hour']]
y_leakage = df_leakage['leakage']

# Scale features
scaler = StandardScaler()
X_leakage_scaled = scaler.fit_transform(X_leakage)
X_synthetic_scaled = scaler.transform(df_synthetic[['water_usage', 'pressure', 'usage_per_pressure', 'hour']])

# Train the logistic regression model
model = LogisticRegression()
model.fit(X_leakage_scaled, y_leakage)

# Predict leakages on synthetic data
df_synthetic['predicted_leakage'] = model.predict(X_synthetic_scaled)

# For comparison, aggregate actual leakages by day from water_leakage_data
df_combined = pd.concat([df_leakage, df_synthetic], ignore_index=True)
df_combined['combined_leakage'] = df_combined['leakage'].fillna(0)
df_combined['predicted_leakage'] = df_combined['predicted_leakage'].fillna(0)

# Aggregate actual leakages by day
actual_leakage_counts = df_combined.resample('D', on='timestamp')['combined_leakage'].sum()

# Aggregate predicted leakages by day
predicted_leakage_counts = df_synthetic.resample('D', on='timestamp')['predicted_leakage'].sum()

# Plot the actual and predicted leakages
plt.figure(figsize=(14, 7))
plt.plot(actual_leakage_counts.index, actual_leakage_counts.values, label='Actual Leakages', color='blue', linestyle='-')
plt.plot(predicted_leakage_counts.index, predicted_leakage_counts.values, label='Predicted Leakages', color='red', linestyle='--')

plt.xlabel('Date')
plt.ylabel('Number of Leakages')
plt.title('Actual vs. Predicted Leakages')
plt.legend()
plt.show()
