import React, { useState, useEffect } from 'react';

// ==========================================
// VAAYU ELIXIR - B2B EXPORT COMMODITY MATRIX
// ==========================================
const COMMODITY_CATALOG = [
  {
    id: 'rice-1121-steam',
    category: 'Grains & Rice',
    title: '1121 Basmati Rice (Steam / Sella)',
    hsn: '1006.30.20',
    botanical: 'Oryza sativa var. Basmati 1121',
    origin: 'Punjab / Haryana Mandis (India)',
    grainLength: '8.35 mm+ Average Pre-Cooked',
    moisture: 'Max 12.5%',
    broken: 'Under 1.0% (Optical Sortex 100%)',
    purity: '95% Pure Varietal Admixture Max 5%',
    packaging: '25kg / 50kg BOPP & Non-Woven Laminated Poly Bags',
    containerPayload: '25.0 MT per 20ft Dry Cargo FCL',
    inspectionStandard: 'SGS / Bureau Veritas Pre-Berth Assayed',
    description: 'Premier culinary-grade aromatic extra-long grain with elongation ratio exceeding 2.2x post-cook. Certified optical Sortex processed for export.'
  },
  {
    id: 'rice-1509-steam',
    category: 'Grains & Rice',
    title: '1509 Basmati Rice (Golden / Steam)',
    hsn: '1006.30.20',
    botanical: 'Oryza sativa var. Basmati 1509',
    origin: 'Taraori & Karnal Rice Belt (India)',
    grainLength: '8.40 mm+ Pre-Cooked',
    moisture: 'Max 12.5%',
    broken: 'Under 1.0% Sortex Milled',
    purity: '95% Pure Varietal Admixture',
    packaging: '10kg, 25kg, 50kg Master Bags',
    containerPayload: '25.5 MT per 20ft Dry FCL',
    inspectionStandard: 'APEDA / SGS Assayed',
    description: 'High-volume commercial Basmati delivering long slender visual appeal, exceptional aroma, and rapid culinary turnaround for catering and retail markets.'
  },
  {
    id: 'rice-ir64-parboiled',
    category: 'Grains & Rice',
    title: 'IR64 Non-Basmati Parboiled Rice (5% Broken)',
    hsn: '1006.30.90',
    botanical: 'Oryza
