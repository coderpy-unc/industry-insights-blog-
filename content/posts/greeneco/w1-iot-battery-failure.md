---
title: "How IoT Is Silently Killing E-Rickshaw Batteries"
date: "2026-03-18"
business: greeneco
week: 1
excerpt: "Green Eco India estimates that roughly 1 in 10 lithium battery failures in e-rickshaw fleets with aftermarket IoT installations trace back to the same root cause — not the battery, not the cells, not the charger. The IoT device itself."
tags: ["e-rickshaw", "IoT", "BMS", "battery failure", "EV fleet", "deep discharge", "India"]
---

IoT was supposed to make e-rickshaw fleets smarter. In many cases, it is doing the opposite.

[Green Eco India](https://www.greenecoindia.com) estimates that roughly **1 in 10 lithium battery failures** in e-rickshaw fleets with aftermarket IoT installations trace back to the same root cause — not the battery, not the cells, not the charger. The IoT device itself.

Here is exactly what is happening.

## The bypass problem

A lithium battery pack has a BMS sitting between the cells and everything connected to the pack. That is the point. The BMS controls what draws current from the cells and when. It disconnects the load when cell voltage drops below the safe threshold — typically 2.5V per cell for LFP chemistry — to prevent deep discharge damage.

Aftermarket IoT devices — GPS trackers, telematics units, fleet management hardware — need a permanent power source to stay online. The correct way to connect them is through the BMS output, so they sit within the protection envelope.

In practice, many installers wire the IoT device **directly to the battery cells, bypassing the BMS entirely.** It is faster, simpler, and avoids the need to understand the BMS wiring.

The consequence is serious.

## What happens when the vehicle is parked

When the e-rickshaw is parked and not in use, the motor draws zero current. The BMS sees no load and sits idle. But the IoT device — now connected directly to the cells — continues drawing current. Continuously. All night.

A typical aftermarket GPS/telematics unit draws between **20mA and 80mA** in idle mode. Over an 8-hour overnight park, that is 160mAh to 640mAh pulled directly from the cells with no BMS oversight.

On a 48V LFP pack configured as 16S, this drain is uneven across cells. The cells connected closest to the IoT tap discharge faster than others. Over weeks and months, cell divergence grows. Eventually, the weakest cell drops below the safe threshold while the pack as a whole still shows acceptable voltage.

The BMS — which is not in the circuit for this drain — cannot intervene. The weak cell deep discharges. **Deep discharge below 2.0V causes irreversible lithium plating damage to the anode.** That cell's capacity is permanently reduced.

## The SOC calculation breaks down

The BMS calculates State of Charge by tracking current in and out of the pack — coulomb counting. When the IoT device bypasses the BMS and draws current the BMS cannot see, that current is invisible to the SOC calculation.

The result: the BMS thinks the pack has more charge than it actually does.

- The driver's range indicator reads optimistic
- The low battery warning triggers later than it should
- The vehicle runs deeper into discharge before the driver stops to charge

Each cycle, the pack is being discharged slightly further than the BMS reports. Over time, this compounds the cell damage already being caused by the overnight parasitic drain.

## The correct integration

Connecting an IoT device to a lithium e-rickshaw battery requires two things:

- **Connect through the BMS output** — never directly to the cells. The IoT device must sit on the load side of the BMS so all current draw is visible to the protection circuit.
- **Use a BMS with a dedicated low-current always-on output** — some BMS designs provide a separate auxiliary output specifically for telematics, rated for the small continuous current an IoT device needs without triggering the main load protection.

[Green Eco India's](https://www.greenecoindia.com) BMS and Telemetry Control Unit are designed to work together as an integrated system. The TCU connects through the BMS data interface, not around it. Battery current accounting remains intact. SOC calculation stays accurate.

## Why this matters beyond the fleet operator

This is a design problem repeating itself across thousands of vehicles in India as IoT adoption grows faster than installation standards. For battery manufacturers, BMS designers, and fleet platform developers, the question is whether IoT integration is part of the battery system specification — or left to chance at the point of installation.

Contact Green Eco India: [greenecoindia.com](https://www.greenecoindia.com) · +91 89290 65286 · Delhi, India.
