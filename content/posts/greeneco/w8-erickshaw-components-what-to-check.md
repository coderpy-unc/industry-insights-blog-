---
title: "E-Rickshaw Components: What to Check Before Buying in India"
date: "2026-04-28"
business: greeneco
week: 8
excerpt: "India's e-rickshaw market has hundreds of assemblers and wide variation in component quality. Most buyers make decisions on price and appearance. Here is what actually determines whether a vehicle lasts 3 years or 3 months."
tags: ["e-rickshaw", "BMS", "motor", "controller", "India", "EV components", "Green Eco"]
---

At [Green Eco India](https://www.greenecoindia.com), we supply BMS units, battery packs, controllers, and telemetry systems to e-rickshaw OEMs and fleet operators across India. The e-rickshaw market is one of the most fragmented segments in Indian manufacturing — hundreds of assemblers, wide variation in component quality, and limited transparency in what is actually inside the vehicle at the time of purchase.

The consequences of buying wrong components are not abstract: a BMS failure at month 8 means a pack replacement that costs more than the original battery. A motor rated for 850W running at 1,200W continuous burns out in 6 months. A charger without proper voltage regulation damages the pack on every charge cycle.

This post covers the five critical components and what to verify on each before a purchase decision.

## The five critical components

**1. Motor**

The motor is the heart of the powertrain. For a standard e-rickshaw in Indian conditions — three to four adults, hilly terrain, stop-start urban cycling — the motor specification matters significantly.

What to verify: rated power (850W is the standard for passenger e-rickshaws under CMVR), peak power capability, IP rating (minimum IP54 for dust and splash protection in Indian road conditions), and whether the motor is brushed or brushless. Brushless BLDC motors are more expensive but significantly more durable — brushed motors have commutator wear that limits their useful life in high-cycle applications.

Red flag: no IP rating stated, no continuous vs peak power distinction on the specification sheet.

**2. Controller**

The motor controller manages power delivery from the battery to the motor. In Indian e-rickshaw applications, the controller must handle the high-current surges of uphill starts, the regenerative braking current on downhill sections, and the sustained draw of heavy load operation.

What to verify: current rating (continuous and peak), compatibility with the specific motor and battery voltage, whether it supports regenerative braking, and whether it has a communication interface to the BMS and display.

Red flag: a controller rated only for continuous current without a stated peak current figure. Starting current can be 3–5× continuous — a controller that cannot handle this will fail early or limit performance at exactly the moments when power is most needed.

**3. BMS — the most critical and most underspecified component**

The Battery Management System is the component that determines whether your battery pack lasts its rated cycle life or fails at 40% of it. It is also the component most frequently substituted for a cheaper alternative without the buyer's knowledge.

What to verify:

- **Cell-level monitoring** — the BMS must monitor each cell individually, not just total pack voltage. A BMS that monitors only pack voltage cannot detect a single weak cell until it drives the entire pack into protection cutoff.
- **Communication port** — a BMS without RS485, UART, or CAN communication cannot be connected to a telemetry system. If you ever want fleet visibility, the BMS must have a communication interface built in from the start.
- **AIS 156 compliance** — mandatory for FAME II subsidy eligibility. Ask for the compliance certificate, not just a declaration.
- **Balancing capability** — passive balancing at minimum. Without balancing, cell divergence accumulates over every charge cycle and progressively reduces usable pack capacity.
- **Temperature protection** — the BMS must monitor pack temperature and reduce or cut off current before cells reach damaging temperatures. In Indian summer conditions, this is a frequent trigger event.

Red flag: no cell-level voltage monitoring, no communication port, no AIS 156 documentation.

**4. Cells**

The cells inside the battery pack are the energy storage medium. Cell quality is the single largest determinant of pack cycle life, and it is almost entirely invisible to the buyer at the time of purchase.

What to verify: cell manufacturer (tier 1 cells from known manufacturers vs generic cells from unverified sources), cell chemistry (LFP for cycle life and safety, NMC for higher energy density at lower safety margin), rated capacity in Ah, and cycle life specification.

Ask the supplier directly: what cells are inside this pack, and who made them? If the answer is vague — "quality lithium cells" without a manufacturer name — that is information in itself.

**5. Charger**

The charger is the component most frequently treated as an afterthought. A charger that delivers incorrect voltage, charges at unregulated current, or has no communication with the BMS will damage the pack on every charge cycle — silently, progressively, and irreversibly.

What to verify: output voltage matched to the pack's maximum charge voltage (not just nominal voltage), current rating, whether it communicates with the BMS to terminate charge correctly, and whether it has overtemperature protection.

Red flag: a charger with no BMS communication and no CC-CV (constant current — constant voltage) charge profile indication. Most lead-acid chargers repurposed for lithium packs fall into this category. They will overcharge lithium cells.

## What Green Eco India supplies and verifies

Green Eco India supplies BMS units with cell-level monitoring, AIS 156 compliance documentation, RS485 communication, and passive balancing — specified and tested for Indian e-rickshaw operating conditions. We also supply telemetry control units that connect to the BMS for fleet-level visibility.

For component specifications, compatibility verification, and fleet supply, contact [Green Eco India](https://www.greenecoindia.com) at sales@lithionpower.com · +91 89290 65286.
