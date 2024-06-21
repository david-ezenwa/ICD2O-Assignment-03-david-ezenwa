// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict";

function calculateCost() {
  const size = document.getElementById('size').value;
  const toppings = parseInt(document.getElementById('toppings').value);

  const prices = {
    'Large': 6.00,
    'Extra Large': 10.00
  };

  const toppingsPrices = {
    1: 1.00,
    2: 1.75,
    3: 2.50,
    4: 3.35
  };

  const HST = 0.13;

  // Calculate base cost
  let baseCost = prices[size];

  // Calculate toppings cost
  let toppingsCost = toppingsPrices[toppings];

  // Subtotal
  let subtotal = baseCost + toppingsCost;

  // Tax
  let tax = subtotal * HST;

  // Final cost
  let finalCost = subtotal + tax;

  // Display results
  document.getElementById('result').innerHTML = `
    <p>Subtotal: $${subtotal.toFixed(2)}</p>
    <p>Tax: $${tax.toFixed(2)}</p>
    <p>Final Cost: $${finalCost.toFixed(2)}</p>
  `;
}
