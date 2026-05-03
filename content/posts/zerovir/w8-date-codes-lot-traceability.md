---
title: "Date Codes and Lot Traceability: Why They Matter When Buying Semiconductor Components"
date: "2026-04-30"
business: zerovir
week: 8
excerpt: "A date code is not just a number on a chip package. It tells you when the component was manufactured, how long it has been sitting in storage, and whether the reliability data from the manufacturer's datasheet still applies. Most secondary market buyers do not ask about it until something goes wrong."
tags: ["date code", "lot traceability", "semiconductor", "supply chain", "ZeroVIR", "Singapore"]
---

At [ZeroVIR](https://www.zero-vir.com), every component transaction includes date code documentation and lot traceability as a non-negotiable requirement. This is not bureaucratic caution — it is the minimum information needed to make a rational procurement decision when buying from the secondary market.

## What a date code is and what it tells you

A date code on a semiconductor component package identifies the week and year of manufacture. The most common format is a four-digit code: the first two digits represent the year, the last two represent the week. A component marked 2347 was manufactured in week 47 of 2023.

Date codes serve three functions in the supply chain:

**Reliability baseline** — semiconductor component datasheets specify reliability parameters (MTTF, failure rate, qualification test conditions) based on components manufactured and tested at a specific point. Date codes allow you to confirm that the components you are purchasing are from a manufacturing period consistent with the qualification data.

**Storage life assessment** — electronic components have finite shelf life even when stored correctly. The primary concern is lead-free solder finish degradation — tin-based surface finishes on component leads and pads oxidise over time, reducing solderability. IPC/JEDEC J-STD-033 specifies moisture sensitive device (MSD) shelf life limits from the seal date. Most standard plastic-packaged ICs have a practical shelf life of 2–3 years in sealed, moisture-barrier bags with desiccant, and 12 months once opened. Components stored outside these conditions degrade faster.

**Counterfeit detection** — remarked counterfeits typically use recent date codes applied to old or salvaged parts. If a component is represented as new stock from a recent production date but shows visual or physical signs inconsistent with recent manufacture — oxidised leads, sanding marks on the package, inconsistent marking depth — the date code discrepancy is a key indicator.

## What lot traceability means

Lot traceability connects a specific batch of components back to a defined manufacturing run — the wafer lot, the assembly lot, and the test lot. This chain of identification is maintained by the original manufacturer and can be verified against their production records for high-value or safety-critical components.

Lot traceability matters for three reasons:

**Quality incident management** — when a manufacturer issues a product notification or field change notice (FCN) affecting a specific production lot, you need to know whether your inventory is affected. Without lot identification, you cannot determine whether your components fall within the affected range or are clear.

**Failure analysis** — when a component fails in circuit during qualification testing or field deployment, lot traceability allows the failure to be correlated with other components from the same production run. A lot-specific failure pattern indicates a manufacturing or materials issue; a random failure pattern across lots indicates a design or application issue. The distinction drives entirely different corrective actions.

**Regulatory compliance** — in automotive, aerospace, medical, and defence applications, traceability to the original manufacturer's production records is a compliance requirement, not a preference. Purchasing components without lot documentation from the secondary market creates a compliance gap that cannot be retroactively closed.

## The shelf life question — how long is too long?

Components stored correctly — in sealed, dry, temperature-controlled conditions — can maintain reliability characteristics for significantly longer than their nominal shelf life. The practical guidance:

**Standard plastic-packaged ICs (QFP, SOIC, DIP)** — tin-lead finish: 2 years from seal date in original packaging; lead-free finish: 12 months from seal date. Beyond these periods, solderability testing is required before use in production.

**Ball grid array (BGA) packages** — more sensitive to moisture absorption than leaded packages. 12 months from seal date in sealed MSD packaging; baking may be required before assembly for components beyond this date.

**Bare die and flip chip** — 6–12 months depending on die metallisation; storage conditions are critical.

**Passive components (resistors, capacitors)** — generally more stable than active ICs. Ceramic capacitors: indefinite if stored correctly. Aluminium electrolytic capacitors: 2 years maximum from manufacture date due to electrolyte evaporation.

For secondary market components with unknown storage conditions, solderability testing and incoming inspection are not optional — they are the minimum due diligence.

## How ZeroVIR documents date codes and lot traceability

Every component ZeroVIR purchases is documented with date code and lot number at the point of authentication. The authentication certificate issued to the seller includes this information, as does the transaction record provided to the buyer.

For buyers, this means: every component purchased through ZeroVIR comes with documented date code, lot number, and an independent laboratory authentication confirming that the physical marking matches the claimed date code and that the component shows no signs of remarking or misrepresentation.

For sellers, this means: the lot documentation you provide at submission is verified against the components during authentication. Discrepancies between submitted documentation and physical components are identified and disclosed before the transaction closes — not discovered by a downstream buyer.

Date codes and lot traceability are the foundation of a responsible secondary market. Without them, a procurement decision is made on incomplete information.

Contact ZeroVIR at info@zero-vir.com · [zero-vir.com](https://www.zero-vir.com) · Singapore UEN 202022590E.
