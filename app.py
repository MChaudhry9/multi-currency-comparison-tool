from flask import Flask, request, jsonify
import requests
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv() #for security for the API key

app=Flask(__name__)
CORS(app)

API_KEY=os.getenv("API_KEY")

@app.route("/")
def home():
    return "Currency comparer backend is running"

@app.route("/compare", methods=["POST"])
def compare_prices():
    data=request.json
    price=data["price"]
    base_currency=data["base_currency"]

    currencies=["EUR", "GBP", "JPY"] #add more currencies here to increase variety

    url=f"https://v6.exchangerate-api.com/v6/{API_KEY}/latest/{base_currency}"

    response=requests.get(url)
    rates=response.json()["conversion_rates"]

    results={}

    for currency in currencies:
        converted=price*rates[currency]
        results[currency]=round(converted, 2)

    lowest=min(results, key=results.get)

    return jsonify({
        "base_price": price,
        "base_currency": base_currency,
        "conversions": results,
        "lowest_currency": lowest
    })


if __name__ == "__main__":
    app.run(debug=True)

