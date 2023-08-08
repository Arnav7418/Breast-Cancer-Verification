import pickle
import streamlit as st
import pandas as pd
import numpy as np

# Load the trained model
model = pickle.load(open('C:/Users/ARNAV/Desktop/Cancer detection/breast_cancer_model.pk', 'rb'))

# Function to make predictions
def make_prediction(data):
    prediction = model.predict(data)
    return prediction

# Streamlit app
def main():
    st.title("Breast Cancer Detection")

    st.write("Enter the feature values manually or upload a CSV file:")

    # File input widget for CSV file
    uploaded_file = st.file_uploader("Upload a CSV file", type=["csv"])

    if uploaded_file is not None:
        data = pd.read_csv(uploaded_file)
        if not data.empty:
            test_val = data.iloc[0, :30].values.tolist()  # Extract the first row's values
        else:
            test_val = np.zeros(30)
    else:
        test_val = np.zeros(30)

    # Manual input fields
    st.subheader("Enter feature values manually:")
    input_values = []
    for i in range(30):
        if uploaded_file is not None:
            input_value = st.text_input(f"Value {i+1}", value=str(test_val[i]))
        else:
            input_value = st.text_input(f"Value {i+1}")
        input_values.append(input_value)

    if st.button("Predict"):
        input_values_float = [float(value) if value else 0.0 for value in input_values]
        predictions = make_prediction([input_values_float])
        
        if predictions[0] == 0:
            st.success("Test Negative for Breast Cancer")
        else:
            st.success("Test Positive for Breast Cancer")

if __name__ == '__main__':
    main()
