---
title: "E-Scooter vs E-Rickshaw: Choosing the Right EV for Last-Mile Delivery in India"
date: "2026-03-25"
business: greeneco
week: 3
excerpt: "India's last-mile delivery sector is electrifying fast. E-scooters and e-rickshaws serve different loads, routes, and operating models — and the battery system behind each vehicle is as important as the vehicle itself. Here is how to choose the right EV and specify the right battery for your operation."
tags: ["e-scooter", "e-rickshaw", "EV", "last-mile delivery", "India", "battery", "BMS"]
---

India's last-mile delivery market is one of the fastest-growing EV use cases in the country. At [Green Eco India](https://www.greenecoindia.com), we work with fleet operators making this transition — supplying BMS units, EV components, and fleet management systems to delivery companies across India.

The most common decision point for new fleet operators: **e-scooter or e-rickshaw?** The answer depends on your cargo profile, route structure, and — critically — which battery system you specify for each. This guide breaks down both the vehicle choice and the battery considerations that determine real-world performance.

## The fundamental difference

An e-scooter carries one rider and a delivery box. It is fast, agile, and navigates narrow lanes that larger vehicles cannot. It costs less to buy and can park practically anywhere.

A cargo e-rickshaw carries significantly more volume — typically 150kg to 300kg payload — and is more stable for fragile or bulky goods. It is slower but can replace a small van for medium-density urban routes.

## When to choose an e-scooter

E-scooters make sense when delivery density is high and distances are short. Quick commerce (10-30 minute delivery windows) requires vehicles that can complete 15-25 deliveries per shift in a compact zone. Package size must be small — single grocery orders, pharmacy deliveries, food packages. Capital budget is also lower, making fleet scaling faster.

The main limitation: payload is fixed and small. If your average order weight exceeds 5-8kg, an e-scooter is not the right fit.

## When to choose a cargo e-rickshaw

Cargo e-rickshaws are the better choice when payload volume matters. Grocery delivery of 20-30 items, laundry logistics, or medicine boxes for multiple stops — a three-wheeler can carry a full shift's load in one run. They are also better for fragile goods requiring stability, and for hub-to-neighbourhood trunk runs in a hub-and-spoke model.

## How to get the right battery for each vehicle

This is where most fleet operators underinvest at the procurement stage — and where the real cost of ownership difference is determined.

### For e-scooters: what to look for

E-scooters typically use 48V / 24Ah to 36Ah packs. The key specification considerations:

**Chemistry.** LFP (lithium iron phosphate) is the right choice for delivery fleets despite being slightly heavier than NMC. It handles the partial state-of-charge cycling that delivery operations demand — where the battery is charged opportunistically throughout the day, not fully cycled once — without the rapid degradation that NMC chemistry experiences under similar patterns. LFP packs in delivery use can deliver 1,500–2,000 cycles versus 600–900 for lower-grade NMC under real operating conditions.

**BMS continuous discharge rating.** Match the BMS rating to your motor controller's peak demand, not average current. A motor controller rated at 30A peak needs a BMS with at minimum 35A continuous discharge rating. Running a BMS at or near its limit accelerates MOSFET degradation.

**Thermal protection.** Indian summers push ambient temperatures above 40°C. Specify a BMS with multi-point NTC temperature sensing and temperature-based current derating. Without this, the pack runs at full current when cells are already thermally stressed — the fastest route to premature degradation.

**Communication output.** UART or RS485 output allows integration with a fleet management system. For any fleet above 5 vehicles, real-time battery telemetry is worth specifying from the outset.

### For cargo e-rickshaws: what to look for

E-rickshaws use larger packs — commonly 48V / 100Ah to 120Ah. The larger capacity and heavier daily usage make the BMS specification more critical, not less.

**Cell balancing is essential.** In a high-capacity pack with many cells in parallel strings, cell imbalance accumulates over time. A BMS without active or effective passive balancing will see usable capacity drop noticeably within 200–300 cycles. Specify a BMS with cell-level voltage monitoring and balancing current of at least 50mA per cell.

**Pre-charge circuit.** Cargo e-rickshaws have larger motor controllers with bigger capacitor banks. At startup, the inrush current into these capacitors can spike to several hundred amps for milliseconds. A BMS without pre-charge capability either trips its own protection (causing startup failures) or allows the spike to stress the MOSFET switches repeatedly. Specify pre-charge as a mandatory feature.

**SOC accuracy under load.** Delivery operations involve frequent acceleration from standstill — high-current pulses that cause significant voltage sag. A BMS using voltage-only SOC estimation will read falsely low SOC during these events, causing premature low-battery warnings and range anxiety for drivers. Specify coulomb-counting SOC estimation with voltage recalibration.

**Display or telematics integration.** Driver visibility into SOC matters for route planning. Either a dedicated BMS display or integration with a vehicle-mounted display should be specified. For fleet operators, a TCU (Telemetry Control Unit) that transmits battery data alongside GPS location turns battery health into a fleet management tool.

## Fleet economics: a simplified comparison

| Metric | E-scooter | Cargo e-rickshaw |
|---|---|---|
| Vehicle cost | ₹80,000–1,20,000 | ₹1,50,000–2,50,000 |
| Battery pack cost | ₹15,000–25,000 | ₹40,000–70,000 |
| Payload per trip | 5-8 kg | 80-150 kg |
| Daily deliveries | 20-30 | 40-60 (consolidated) |
| Charging cost/day | ₹25-40 | ₹60-90 |
| Battery replacement cycle (quality BMS) | 3-4 years | 4-5 years |

For a high-volume operation, cargo e-rickshaws offer a better cost-per-kg-delivered metric. For high-frequency, small-parcel delivery, e-scooters win on speed and flexibility. Many mature operations use both — rickshaws for hub-to-neighbourhood trunk runs, scooters for doorstep delivery.

For fleet composition advice, BMS specifications, or telemetry systems for your EV fleet, contact [Green Eco India](https://www.greenecoindia.com) at our Delhi office or reach us at sales@lithionpower.com, +91 89290 65286.
