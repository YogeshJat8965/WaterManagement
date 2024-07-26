from flask import Flask, request, jsonify, render_template
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans

app = Flask(__name__, template_folder='.', static_folder='static')

# Load dataset
data = pd.read_csv('synthetic_water_meter_data.csv')

# Fill missing values
data.fillna(method='ffill', inplace=True)

# Convert timestamps to datetime objects
data['timestamp'] = pd.to_datetime(data['timestamp'])

# Ensure data types are correct
data['household_id'] = data['household_id'].astype(str)

# Select features for clustering
features = data[['water_usage', 'pressure']].dropna()

# Standardize features
scaler = StandardScaler()
scaled_features = scaler.fit_transform(features)

# Apply KMeans clustering
kmeans = KMeans(n_clusters=3, random_state=42)
data['cluster'] = kmeans.fit_predict(scaled_features)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    question = request.json.get('question')
    response = {
        'id': 'chatcmpl-a775a669-3956-4bba-a3e2-bb7294ba942e',
        'object': 'chat.completion',
        'created': 1721810441,
        'model': 'llama3-8b-8192',
        'choices': [{
            'index': 0,
            'message': {
                'role': 'assistant',
                'content': 'Hi there! How can I assist you today?'
            },
            'logprobs': None,
            'finish_reason': 'stop'
        }],
        'usage': {
            'prompt_tokens': 42,
            'prompt_time': 0.008269123,
            'completion_tokens': 11,
            'completion_time': 0.007898957,
            'total_tokens': 53,
            'total_time': 0.01616808
        },
        'system_fingerprint': 'fp_af05557ca2',
        'x_groq': {
            'id': 'req_01j3hycmetfapvjy7bvk8nrfje'
        }
    }
    return jsonify(response)

@app.route('/clusters', methods=['GET'])
def get_clusters():
    plot_data = data[['household_id', 'water_usage', 'pressure', 'cluster']].dropna()
    print(plot_data.head())  # Debug print
    return plot_data.to_json(orient='records')

if __name__ == '__main__':
    app.run(debug=True)
