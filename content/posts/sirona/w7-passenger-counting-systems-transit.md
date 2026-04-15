---
title: "Passenger Counting Systems for Metro and Bus Stations: How They Work"
date: "2026-04-25"
business: sirona
week: 7
excerpt: "Passenger counting is one of the most data-rich and underutilised capabilities in public transit. The technology is mature, the accuracy is high, and the operational applications — from service frequency planning to crowd management — are direct and measurable."
tags: ["passenger counting", "transit IoT", "embedded systems", "Singapore", "smart city", "Sirona"]
---

At [Sirona Robotics](https://www.sironarobotics.com), we work across embedded systems, IoT infrastructure, and enterprise integration — and passenger counting systems are a domain that sits at the intersection of all three. The technology is well-established in Singapore and major global transit networks, but its full operational potential is rarely realised because the data is collected without a clear plan for how it will be acted upon.

This post covers how passenger counting systems work, what accuracy levels are achievable, and how the data connects to operational decisions.

## Why transit authorities deploy passenger counting

The fundamental operational problem passenger counting addresses is asymmetric information: transit authorities know what service they are operating (frequency, capacity, routing) but have limited real-time visibility into what demand actually looks like at each station, each door, and each time interval.

Without accurate demand data, service planning relies on periodic manual surveys — expensive, infrequent, and producing point-in-time snapshots rather than continuous data. Revenue modelling for fare-free or flat-fare systems lacks the ridership validation that informs infrastructure investment decisions. Crowd management at peak periods is reactive rather than anticipatory.

Automated passenger counting closes this information gap continuously and at scale.

## Technology options and their trade-offs

**Infrared beam counters** — the simplest and most established technology. Horizontal infrared beams across a doorway or gate are broken by passing passengers, generating a count. Inexpensive, low-maintenance, and highly reliable in controlled environments (turnstile gates, single-file passages). Accuracy degrades significantly when passengers move in groups, carry luggage, or move through wide doorways where multiple people cross simultaneously. Practical accuracy: 85–92% in uncontrolled door environments, 97–99% at single-file turnstiles.

**3D depth sensors (time-of-flight and structured light)** — sensors mounted above doorways or at station entries that create a depth map of the space below. Individual people are detected as three-dimensional objects and tracked through the sensor field. More robust than infrared in crowded conditions — a group of three people passing together is counted as three, not as one interrupted beam. Accuracy: 93–97% at station doors under crowded conditions, with modern systems exceeding 98% in controlled evaluations. Higher cost than infrared; requires more computational processing.

**Computer vision (AI-based)** — cameras combined with deep learning object detection models. Highly flexible — the same camera installation can support multiple functions (counting, crowd density estimation, abandoned item detection, flow direction analysis). Accuracy is competitive with 3D depth sensors when the model is well-trained for the specific environment. Privacy considerations are more significant than with depth sensors, since cameras capture identifiable imagery. Anonymisation processing — where the frame is analysed and discarded without storage — addresses most regulatory concerns but requires explicit data governance documentation.

**Wi-Fi and Bluetooth probe detection** — counts mobile devices broadcasting Wi-Fi probe requests or Bluetooth signals as a proxy for people count. Does not require doorway installations — works across open station concourses. Significant limitations: not all passengers carry devices, device-to-person ratio varies, multiple devices per person inflate counts, and signal strength variations create uncertainty in spatial localisation. Useful as a supplementary data source for concourse crowd estimation, not as a primary counting mechanism for revenue or capacity planning.

## Accuracy requirements by application

The required accuracy level is determined by how the data will be used:

**Revenue and fare apportionment** — systems where passenger counts are used to allocate revenue between operators or validate fare-free zone usage require accuracy above 95%, ideally above 98%. At this level, sensor-level errors are small enough that aggregate ridership figures are reliable for financial modelling.

**Service planning and frequency optimisation** — load factor data used to adjust service frequency, dwell times, and vehicle deployment. Accuracy above 90% is typically sufficient — the operational decisions are directional (this route is consistently overcrowded, this station has significant peak-hour demand) rather than requiring precision counts.

**Crowd management and safety** — real-time occupancy monitoring for platform safety, concourse density management, and emergency response. Accuracy requirements depend on the action thresholds — a 10% count error at a station with a 500-person safe capacity threshold means the alarm triggers at 450 or 550 people rather than 500. The consequence of this error determines the acceptable accuracy level.

## Integration with AFC and operations control centres

The value of passenger counting data is realised through integration with the transit authority's other operational systems:

**Automatic Fare Collection (AFC) integration** — comparing passenger counting data with AFC transaction data allows validation of fare evasion rates, identification of stations or time periods with high evasion, and cross-checking of revenue assumptions. This comparison requires that both data streams share a common timestamp and station reference, which requires data architecture planning at the point of system design.

**Operations Control Centre (OCC) integration** — real-time passenger count data fed to the OCC enables dynamic dwell time adjustment (the driver or system holds the door open when the platform count indicates more passengers are approaching), early warning of station congestion, and evidence-based decisions about deploying additional vehicles.

**Historical data analysis** — accumulated passenger count data over months and years enables service planning that reflects actual demand patterns rather than modelled assumptions. The data infrastructure for this requires a time-series database capable of handling high-frequency sensor data at scale, with appropriate data retention and access policies.

## Privacy and data governance

Passenger counting systems that use cameras or Wi-Fi probe detection must address data governance explicitly. In Singapore, the Personal Data Protection Act (PDPA) and the guidance from the Personal Data Protection Commission (PDPC) on video surveillance and analytics apply to systems that capture or process data from which individuals could be identified.

For passenger counting specifically, anonymisation at the point of capture — where the computer vision processing happens on the device before any data is transmitted, and no identifiable imagery is stored or transmitted — typically removes the system from PDPA's personal data provisions. This design approach should be documented and confirmed with legal counsel before deployment.

The IoT and embedded systems architecture for a privacy-compliant passenger counting system processes counting and density data at the edge (on the sensor device), transmits only aggregated counts and anonymised flow data to the central platform, and maintains no video archive. This is both a privacy best practice and a bandwidth and storage efficiency.

At Sirona Robotics, our embedded systems and IoT integration capability covers the sensor layer, edge processing, data transmission, and enterprise integration that passenger counting systems require. For organisations designing or upgrading transit IoT infrastructure, contact Sirona at info@sironarobotics.com · [sironarobotics.com](https://www.sironarobotics.com).
