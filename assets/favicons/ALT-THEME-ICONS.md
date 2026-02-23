# Industry / card icons (SVG)

Card icons are loaded from **`industry_icons/`** in this folder. Use **fill #374C6F** in each SVG.

## Files in this folder (exact filenames)

Use these **exact** names in code; filenames with spaces or `&` are URL-encoded when used.

| Filename |
|----------|
| `aerospace_defense_industry_icon.svg` |
| `Box_Build_Assembly_capabilities_icon.svg` |
| `Business_General Aviation_focus_areas_icon.svg` |
| `Cable_Harnesses_capabilities_icon.svg` |
| `commercial_aviation_focus_areas_icon.svg` |
| `Communications & Networking_icon.svg` |
| `digital_displays_capabilities_icon.svg` |
| `Electro-Mechanical Assembly_capabilities page_icon.svg` |
| `ElectroMechanical_PCB Assembly_capabilities_icon.svg` |
| `Energy & Utilities_icon.svg` |
| `Engineering_capabilities_icon.svg` |
| `helicopters_focus_areas_icon.svg` |
| `Industrial Equipment_icon.svg` |
| `Instrument Lighting_icon.svg` |
| `Instrument_Panels_Lighting_capablities_icon.svg` |
| `medical_industrial_industry_icon.svg` |
| `medical_services_50dp_374C6F_FILL0_wght400_GRAD0_opsz48.svg` |
| `Medical & Life Sciences_icon.svg` |
| `Military_Programs_FOcus_areas_icon.svg` |
| `Oil & Gas_icon.svg` |
| `Precision_Machining_Fabrication_capablities_icon.svg` |
| `Program Management_icon.svg` |
| `Rail & Transit_icon.svg` |
| `Repair_Services_capabilities_icon.svg` |
| `Satellite_Space_focus_areas_icon.svg` |
| `Simulation_Training_focus_areas_icons.svg` |
| `Transportation & Automotive_icon.svg` |
| `Vending Machines and Unattended Retail_icon.svg` |

## Mapping in `js/includes.js` (`typeToAltIconFile`)

| Card type / resolveType | Filename used |
|-------------------------|----------------|
| display | `digital_displays_capabilities_icon.svg` |
| cable | `Cable_Harnesses_capabilities_icon.svg` |
| machining | `Precision_Machining_Fabrication_capablities_icon.svg` |
| lighting | `Instrument_Panels_Lighting_capablities_icon.svg` |
| assembly | `Box_Build_Assembly_capabilities_icon.svg` |
| electro | `ElectroMechanical_PCB Assembly_capabilities_icon.svg` |
| engineering | `Engineering_capabilities_icon.svg` |
| repair | `Repair_Services_capabilities_icon.svg` |
| aviation | `aerospace_defense_industry_icon.svg` |
| defense | `aerospace_defense_industry_icon.svg` |
| medical | `medical_industrial_industry_icon.svg` |
| industrial | `Industrial Equipment_icon.svg` |
| network | `Communications & Networking_icon.svg` |
| transport | `Transportation & Automotive_icon.svg` |
| energy | `Energy & Utilities_icon.svg` |
| oil | `Oil & Gas_icon.svg` |
| retail | `Vending Machines and Unattended Retail_icon.svg` |
| default | `digital_displays_capabilities_icon.svg` |

**Industries page** (`industries.html`) uses img tags directly:
- Aerospace & Defense → `aerospace_defense_industry_icon.svg`
- Medical and Industrial → `medical_industrial_industry_icon.svg`
