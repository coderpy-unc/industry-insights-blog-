---
title: "Parallel Battery Pack Architecture for High-Power AMRs: What the BMS Must Manage"
date: "2026-04-24"
business: inyx
week: 7
excerpt: "A single battery pack cannot always meet the power and runtime requirements of heavy-payload AMRs. Parallel pack architecture solves this — but introduces BMS challenges that most specifications do not address. Here is what to design for."
tags: ["parallel battery", "AMR", "high-power robotics", "BMS", "LFP", "iNYX", "autonomous mobile robot"]
---

At [iNYX Batteries](https://www.inyxbatteries.com), we supply battery systems for AMR platforms across the power spectrum — from standard 24V warehouse robots to high-payload outdoor autonomous vehicles requiring sustained power delivery at 100A or more. At the upper end of this range, a single battery pack is often insufficient — not because of energy capacity, but because of peak current delivery, thermal management, or physical form factor constraints.

Parallel battery pack architecture is the engineering solution. It is also a significant source of field failures when the BMS implications are not properly addressed at the design stage.

## When a single pack is not enough

A standard warehouse AMR — 100–200kg payload, 24V or 48V system — is well served by a single LFP pack. The continuous current requirement is typically 20–50A, peak current on acceleration or lift is manageable within a single pack's capability, and the physical dimensions of one pack fit the robot's battery bay.

High-power AMRs present a different profile:

**Heavy payload outdoor vehicles** — autonomous forklifts, outdoor logistics robots, construction site autonomous vehicles. These platforms can draw 150–300A continuously during travel under load, with acceleration peaks significantly higher. A single pack that can sustain this current would be physically large and heavy, potentially unacceptable for the vehicle's weight budget.

**Multi-function robots** — platforms that simultaneously power locomotion, a robotic arm, and onboard computing. The cumulative power draw from multiple subsystems can exceed what a single pack rated for the locomotion load alone can safely deliver.

**Extended runtime requirements** — platforms that must operate for 12–16 hours continuously, where total energy capacity requires a battery bank that is most practically implemented as parallel packs rather than a single very large pack.

In all of these cases, the solution is to connect two, three, or four battery packs in parallel on the same DC bus. The total current capability and energy capacity scale with the number of packs. The BMS challenge scales with it.

## The parallel pack problem — why it fails without proper BMS design

Connecting battery packs in parallel without active current management produces a predictable and well-documented failure mode: one pack carries disproportionate load while others contribute less than their share.

This happens because real battery packs are not identical. Even packs from the same manufacturing batch have small differences in internal resistance, cell capacity, and State of Charge at any given moment. When these packs are connected in parallel, the pack with the lowest internal resistance at a given state of charge will source or sink more current than the others. Over time, this pack cycles more heavily, ages faster, and diverges further from the others — which worsens the imbalance progressively.

In a three-pack parallel system without current management, it is common for one pack to contribute 50–60% of total current while the other two contribute 20–25% each. The overloaded pack reaches its thermal or current protection limit first, its BMS trips, the load suddenly shifts to the remaining two packs — which then immediately overload. The system fails cascade-fashion from a condition that would have been within specification if load were distributed evenly.

## What the BMS must manage in a parallel architecture

**Per-string current limiting** — each pack's BMS must independently limit its output current to a configurable threshold, regardless of what the other packs are doing. This is the Lithion Power current limiting feature we described in the context of telecom tower ESS. In a parallel AMR application, the same principle applies: each BMS manages its string's contribution to the shared bus, preventing any single pack from carrying disproportionate load.

The current limit is set at a fraction of the total vehicle current requirement divided by the number of packs, with headroom for transient imbalance. If the vehicle requires 150A continuous and three packs are connected in parallel, each BMS is configured to limit its output to approximately 60–70A — enough to handle transient imbalance without allowing sustained overload.

**State of Charge synchronisation** — in a parallel pack system, the vehicle's power management system needs a single, accurate SOC figure for the combined battery bank. Each pack's BMS reports its individual SOC, and the vehicle controller must aggregate these correctly — typically as a capacity-weighted average. A pack at 80% SOC and a pack at 60% SOC in parallel produce a combined system SOC that depends on the relative capacity of each pack, not simply the arithmetic average.

Incorrect SOC aggregation causes low-battery warnings to trigger too early (if the lowest individual pack SOC is used) or too late (if the highest is used). iNYX pack BMS units report both individual SOC and remaining capacity in Ah, allowing the vehicle controller to implement correct aggregation.

**Hot-swap in a parallel architecture** — replacing one pack in a running parallel system without disrupting the other packs or the vehicle operation requires careful sequencing. The replacement pack must pre-charge to match the bus voltage before its main contactor closes — the same inrush management requirement as a standard hot-swap, but now in the context of a live bus supplied by other packs. The pre-charge circuit must be correctly rated for the bus voltage maintained by the remaining packs, which may be at a different voltage than the replacement pack depending on its SOC.

**Communication architecture** — in a multi-pack system, each BMS is an independent communicating node. The vehicle controller receives separate CAN or RS485 messages from each BMS and must arbitrate between them. The communication architecture must define: which BMS is the master that the vehicle controller treats as authoritative for system-level decisions, how conflicts between pack states are resolved, and what the vehicle controller does if one BMS stops communicating.

iNYX parallel pack systems are supplied with defined communication architecture documentation as part of the integration package. The Lithion Power BMS firmware supports both independent-node and master-slave parallel architectures depending on the vehicle controller's communication capability.

## Pack matching requirements

Parallel packs perform best when the packs are matched — same capacity, same chemistry, same age and cycle history. Mixing old and new packs in a parallel system creates the same internal resistance imbalance that per-string current limiting is designed to manage, but makes the task harder. The recommended practice is to replace all packs in a parallel system simultaneously rather than replacing individual failed packs one at a time.

For applications where individual pack replacement is operationally required, iNYX provides matched replacement packs certified to the same internal resistance specification as the remaining packs in the system.

For parallel pack system specifications, communication architecture documentation, and integration support, contact iNYX Batteries at marketing@lithionpower.com · [inyxbatteries.com](https://www.inyxbatteries.com).
