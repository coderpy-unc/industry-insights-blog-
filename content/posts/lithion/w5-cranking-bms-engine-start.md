---
title: "Cranking BMS: Why Standard BMS Units Fail in Engine-Start Applications"
date: "2026-04-08"
business: lithion
week: 5
excerpt: "A cranking event draws 800A to 2000A for 3 to 5 seconds. Standard BMS units and standard lithium cells are not designed for this. Using them in engine-start applications produces immediate failures — and the failures are not always obvious."
tags: ["cranking BMS", "engine start", "forklift", "truck", "lithium", "India", "Lithion Power"]
---

[Lithion Power](https://www.lithionpower.com) develops Battery Management Systems for a wide range of applications — EV traction, energy storage, telecom, and industrial. Cranking applications — engine-start batteries for diesel trucks, forklifts, construction equipment, and marine engines — represent a category where the BMS and cell requirements diverge sharply from everything else we build.

The divergence is fundamental. Understanding it is essential before specifying a lithium engine-start battery for any application.

## What a cranking event actually is

When a diesel engine starts, the starter motor draws an enormous burst of current to turn the engine over against compression. This is a cranking event.

The numbers: a heavy truck diesel starter motor draws 800A to 1,200A during cranking. A large construction equipment engine can draw up to 2,000A. The event lasts 3 to 5 seconds — sometimes repeated two or three times if the engine does not fire on the first attempt.

This current profile is entirely unlike traction discharge. A traction BMS for an EV is designed for continuous discharge at 1C to 3C — sustained, predictable, thermally manageable. A cranking event is a pulse discharge at 20C to 50C or higher, repeated unpredictably, at whatever ambient temperature happens to exist at startup — which in cold climates can be -20°C to -40°C.

## Why standard lithium cells will not work

This is the most critical point. Standard LiFePO4 traction cells — the cells used in EV batteries, energy storage systems, and most industrial lithium applications — are designed for sustained discharge at moderate C-rates. Their internal resistance is optimised for this use case.

When subjected to a cranking pulse, a standard LFP cell does two things that are both damaging and immediate:

**Voltage collapse** — the cell's internal resistance, while acceptable at 1C to 3C, causes a massive voltage drop at 20C to 50C. The cell voltage sags below the BMS's undervoltage protection threshold within milliseconds of the cranking event starting. The BMS disconnects the pack. The engine does not start.

**Lithium plating** — even if the BMS does not disconnect, the extreme current pulse at low temperatures causes lithium to plate on the anode rather than intercalate into the graphite structure. This is irreversible damage. After a handful of cold cranking events, a standard LFP cell has permanent capacity loss and significantly elevated internal resistance.

Cranking applications require cells with ultra-low internal resistance — typically specialised lithium titanate (LTO) cells or purpose-built high-pulse LFP cells — that are engineered for pulse current delivery at rates that standard traction cells cannot sustain without damage.

## Why standard BMS units fail — the inrush current problem

Even with the correct cells, a standard BMS will fail in a cranking application. The protection MOSFETs in a standard BMS are rated for the sustained current of the application — typically 100A to 300A for a mid-sized EV BMS. They are not rated for 1,000A to 2,000A pulse events.

When the cranking event occurs, the full current flows through the BMS protection switches. Three failure modes follow:

**Immediate MOSFET failure** — at 10x to 20x the rated current, the MOSFET fails in microseconds. It either fails open (no power delivery, engine does not start) or fails shorted (no protection, dangerous condition).

**Progressive MOSFET degradation** — at slightly above rated current, the MOSFET survives but is stressed. Repeated cranking events progressively degrade the gate oxide, reducing the MOSFET's current-handling capability with each event. The BMS appears to work normally for weeks before a sudden failure.

**Protection misfire** — the BMS's overcurrent protection detects the cranking pulse as a fault condition and disconnects the pack before the engine fires. The driver experiences a "dead battery" that recovers immediately after the attempt — a diagnostic nightmare.

A cranking BMS must have MOSFETs rated for the full cranking current with a significant safety margin — at minimum 3x the expected peak cranking current — and protection logic that distinguishes a legitimate cranking pulse from a genuine fault condition. The detection window and trip threshold must be calibrated specifically for the cranking profile of the application.

## Temperature: the cold start requirement

Engine cranking almost always happens at the moment the vehicle is started — which in cold climates or early mornings in Indian winters can mean ambient temperatures of 5°C to -20°C. Lithium cells are significantly less capable at low temperatures — internal resistance rises, available capacity drops.

A cranking BMS must implement temperature-compensated protection thresholds. The undervoltage protection threshold that is appropriate at 25°C will cause nuisance disconnection at 5°C because the cell voltage sags further at low temperature for the same current. Without temperature compensation, a lithium cranking battery that works perfectly in summer will fail to start the engine on a cold January morning.

## Applications in India

The primary cranking applications in the Indian market are:

- **Commercial trucks and buses** — diesel engine start, typically 24V systems drawing 800–1,500A
- **Industrial forklifts** — both diesel and LPG variants, where lithium cranking batteries offer significant weight reduction over lead-acid
- **Construction equipment** — excavators, cranes, generators — high cranking current, frequent cold starts on outdoor sites
- **Marine engines** — outboard and inboard diesel start, where weight and corrosion resistance make lithium cranking attractive
- **Generator sets** — telecom tower and industrial backup generators that start automatically, requiring reliable cold-start performance

Lithion Power's cranking BMS range is designed specifically for these applications — with MOSFET ratings appropriate for the cranking current profile, temperature-compensated protection thresholds, and cell recommendations for the specific engine and operating environment.

For cranking BMS specifications, application engineering support, and cell selection guidance for engine-start lithium batteries, contact [Lithion Power](https://www.lithionpower.com) at sales@lithionpower.com · +91 89290 65286.
