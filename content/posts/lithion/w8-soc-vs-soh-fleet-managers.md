---
title: "Battery State of Charge vs State of Health: What Fleet Managers Must Know"
date: "2026-04-29"
business: lithion
week: 8
excerpt: "SOC tells you how much energy is in the pack right now. SOH tells you how much the pack can hold compared to when it was new. Most fleet managers track only SOC. The one they're missing is the one that drives procurement and prevents roadside failures."
tags: ["SOC", "SOH", "BMS", "fleet management", "battery health", "India", "Lithion Power"]
---

[Lithion Power](https://www.lithionpower.com) deploys Battery Management Systems across thousands of vehicles and energy storage units in India. When we audit fleet operators' battery management practices, the pattern is consistent: SOC monitoring is nearly universal, SOH monitoring is nearly absent. This is the wrong priority.

## SOC and SOH — the distinction that matters

**State of Charge (SOC)** is a snapshot of the current energy level in the pack — expressed as a percentage of the pack's current usable capacity. When the driver's display shows 75% battery, that is SOC. It answers the question: how far can I go on this charge?

**State of Health (SOH)** is a measure of the pack's condition relative to its original specification — expressed as a percentage of original capacity. A pack at 100% SOH delivers exactly what it was rated for when new. A pack at 80% SOH delivers 80% of its original capacity. It answers the question: how degraded is this pack, and when does it need to be replaced?

The critical relationship: SOC is calculated as a percentage of current capacity, not original capacity. A pack at 80% SOH and 100% SOC is fully charged — but it only has 80% of the original energy available. The driver's range indicator, if it was calibrated when the pack was new, is now reading 25% optimistically. The driver believes they have more range than they actually do.

This is how roadside stranded events happen — not from a sudden failure, but from a SOH degradation that nobody tracked until the driver ran out of charge earlier than expected.

## How SOH is calculated

A Lithion Power smart BMS calculates SOH through two complementary methods:

**Capacity measurement** — the BMS performs a full charge-discharge cycle measurement periodically (or continuously with coulomb counting) to determine the actual usable capacity of the pack at its current state. This is compared against the original rated capacity. If a pack rated at 100Ah now delivers 83Ah on a full cycle, SOH is 83%.

**Internal resistance measurement** — as cells age, their internal resistance increases. The BMS measures internal resistance during charge and discharge events and compares against the original baseline. Rising internal resistance is both an indicator of SOH degradation and a cause of increased heat generation and voltage sag under load.

Combining both measurements gives a more accurate SOH figure than either alone — particularly in Indian operating conditions where temperature variation affects both capacity and resistance measurements.

## The 80% SOH threshold

The industry standard replacement trigger for EV and energy storage battery packs is 80% SOH. At this point:

- The pack delivers 80% of original range or backup time
- Internal resistance has increased enough to cause meaningful voltage sag under peak load
- Cell divergence has typically widened to the point where the weakest cell is limiting pack performance significantly
- Further degradation accelerates — the curve from 80% to 60% SOH is steeper than from 100% to 80%

For fleet operators, 80% SOH is not a hard failure — the vehicle still runs. But it is the point at which the pack should be scheduled for replacement during the next planned maintenance window, not run until it causes an unplanned event.

The difference in outcome: a planned pack replacement costs labour, parts, and a scheduled vehicle downtime of a few hours. An unplanned failure costs towing, lost revenue for the day, driver frustration, and often a rush replacement at a premium price.

## What a fleet battery health dashboard looks like

A fleet operator running 20 vehicles fitted with Lithion Power smart BMS units and compatible telematics can generate a weekly battery health report showing:

**Per-vehicle SOH** — flagging any vehicle below 85% SOH for scheduling and below 80% SOH for immediate replacement planning.

**SOH trend rate** — which vehicles are degrading faster than expected for their cycle count. A vehicle showing 3% SOH drop per month when the fleet average is 0.8% per month is experiencing an accelerated degradation condition — thermal stress, frequent deep discharge, or a cell defect — that should be investigated before it reaches the replacement threshold unexpectedly.

**Cell delta voltage per vehicle** — the spread between the highest and lowest cell voltage in the pack. Above 50mV, the BMS begins compensating. Above 100mV, the weakest cell is materially limiting pack performance. This metric often predicts SOH decline 4–6 weeks before it shows up in capacity measurements.

**Internal resistance trend** — rising internal resistance is the earliest indicator of cell aging, typically visible before capacity loss becomes measurable.

**Cumulative throughput** — total Ah cycled through each pack since commissioning. Packs with high throughput relative to their SOH are performing well; packs with low throughput but high SOH decline have a problem beyond normal cycling.

## Why a basic protection BMS cannot provide this

A basic BMS — one with no communication port and no data logging — protects the pack from immediate damage but generates none of this data. The fleet manager has no visibility into pack health until a vehicle fails in service.

A Lithion Power smart BMS logs all of the above parameters with timestamps, transmits them via RS485 or CAN to the vehicle's telematics unit, and makes them available through the fleet management dashboard. The data is there whether or not anyone looks at it — the question is whether the fleet operator has the tools to surface it.

For smart BMS specifications, fleet telematics integration, and battery health dashboard setup, contact [Lithion Power](https://www.lithionpower.com) at sales@lithionpower.com · +91 89290 65286.
