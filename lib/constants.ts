import { Service, Sector, CaseStudy, NavItem } from './types'

export const NAVIGATION: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/services' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Policy', href: '/policy' },
  { label: 'Contact', href: '/contact' },
]

export const SERVICES: Service[] = [
  {
    id: 'process-engineering',
    title: 'Process Engineering',
    value: 'Fundamental Design',
    description: 'We design the core production systems that define your project\'s capability and efficiency.',
    items: [
      'Process flowsheet development',
      'Thermodynamic analysis & optimisation',
      'Equipment sizing & specification',
      'Mass & energy balance studies',
      'Process safety integration',
    ],
    impact: 'Establishes the technical foundation for all downstream engineering disciplines and project success.',
    image: '/images/service-process-engineering-real.jpg',
    imageAlt: 'Process engineering refinery flow diagram',
  },
  {
    id: 'technical-safety',
    title: 'Technical Safety',
    value: 'Risk & Compliance',
    description: 'We identify hazards, quantify risks, and build compliance into every system design.',
    items: [
      'HAZOP & LOPA studies',
      'Safety systems specification (SIL)',
      'QRA & risk quantification',
      'Compliance to international standards',
      'Emergency procedures & response planning',
    ],
    impact: 'Protects personnel, assets, and operations while meeting regulatory requirements.',
    image: '/images/service-technical-safety-real.jpg',
    imageAlt: 'Technical safety fire and gas detection system',
  },
  {
    id: 'control-instrumentation',
    title: 'Control & Instrumentation',
    value: 'Automation & Monitoring',
    description: 'We design monitoring and automation systems that ensure safe, efficient, reliable operation.',
    items: [
      'DCS & PLC programming strategies',
      'Instrumentation & sensor selection',
      'Process control logic design',
      'SCADA system architecture',
      'Alarm & shutdown logic definition',
    ],
    impact: 'Transforms process data into operational control and continuous improvement.',
    image: '/images/service-instrumentation-control.jpg',
    imageAlt: 'Process control instrumentation dashboard',
  },
  {
    id: 'piping-plotplan',
    title: 'Piping & Plot Planning',
    value: 'Layout & Integration',
    description: 'We optimise spatial and functional layouts to maximise efficiency and operational access.',
    items: [
      '3D plot plan development',
      'Pipe routing & stress analysis',
      'Equipment arrangement optimisation',
      'Utility distribution networks',
      'Maintenance access planning',
    ],
    impact: 'Creates buildable, maintainable, efficient facilities that stand for decades.',
    image: '/images/service-piping-plotplan.jpg',
    imageAlt: 'Piping isometric and plot plan engineering layout',
  },
  {
    id: 'mechanical-static',
    title: 'Mechanical Static Equipment',
    value: 'Structural Integrity',
    description: 'We design vessels, towers, and structures engineered for reliability and longevity.',
    items: [
      'Pressure vessel design & certification',
      'Heat exchanger specifications',
      'Storage tank engineering',
      'Structural frame design',
      'Skid-mounted unit integration',
    ],
    impact: 'Ensures equipment withstands operating pressures, temperatures, and environmental conditions.',
    image: '/images/service-mechanical-static.jpg',
    imageAlt: 'Mechanical static pressure vessel engineering drawing',
  },
  {
    id: 'mechanical-rotating',
    title: 'Mechanical Rotating Equipment',
    value: 'Performance & Reliability',
    description: 'We specify and integrate pumps, compressors, and turbines optimised for your process.',
    items: [
      'Pump selection & performance curves',
      'Compressor specification & integration',
      'Turbine performance assessment',
      'Equipment foundations & installation',
      'Vibration & alignment considerations',
    ],
    impact: 'Delivers the kinetic systems that move, compress, and transform your process streams.',
    image: '/images/service-mechanical-rotating.jpg',
    imageAlt: 'Mechanical rotating pump compressor turbine',
  },
  {
    id: 'pipeline-engineering',
    title: 'Pipeline Engineering',
    value: 'Transportation Solutions',
    description: 'We design and engineer pipeline systems for reliable, safe transport of fluids and gases.',
    items: [
      'Pipeline routing & hydraulic design',
      'Pressure drop analysis & optimisation',
      'Valve & control point specification',
      'Protection & corrosion management',
      'Regulatory compliance & certifications',
    ],
    impact: 'Moves product safely and efficiently across your operational geography.',
    image: '/images/service-pipeline.jpg',
    imageAlt: 'Pipeline route and valve station design',
  },
]

export const SECTORS: Sector[] = [
  {
    id: 'oil-gas',
    name: 'Oil & Gas Processing',
    context:
      'Gas processing facilities and oil production systems require comprehensive engineering covering all disciplines from process design to safety systems.',
    projects: [
      'Gas processing facility design',
      'Oil production systems engineering',
      'Hydrocarbon separation systems',
      'Facility integration engineering',
      'Complete technical package delivery',
    ],
    expertise:
      'Extensive experience in gas processing facilities and complex hydrocarbon projects. We provide comprehensive engineering services across all disciplines.',
    why: 'Oil and gas engineering encompasses the full breadth of technical challenges. Our expertise spans all seven engineering disciplines required to deliver complete, integrated, buildable solutions.',
    image: '/images/sectors-oil-gas.jpg',
  },
  {
    id: 'cryogenic',
    name: 'Cryogenic (LNG/LPG/NGL)',
    context: 'Cryogenic processing represents the highest complexity in thermal and process engineering, requiring specialized expertise in low-temperature systems and materials.',
    projects: [
      'LNG processing and liquefaction',
      'LPG production systems',
      'Natural gas liquids (NGL) fractionation',
      'Cryogenic equipment selection',
      'Low-temperature system engineering',
    ],
    expertise:
      'Specialized experience with LNG, LPG, and NGL systems. We understand the technical challenges of operating at temperatures below -160°C and have delivered comprehensive engineering packages for cryogenic facilities.',
    why: 'Cryogenic processes operate at the extreme edge of engineering capability. We maintain deep expertise in materials science, thermodynamic analysis, safety design, and operational best practice for these critical systems.',
    image: '/images/sectors-cryogenic.jpg',
  },
  {
    id: 'refining',
    name: 'Refining & Petrochemicals',
    context: 'Refineries and petrochemical plants integrate multiple process streams and demand comprehensive engineering with zero tolerance for process upset or safety failure.',
    projects: [
      'Crude distillation unit engineering',
      'Hydrocracking and hydrotreating systems',
      'Separation and fractionation units',
      'Product specification systems',
      'Complete refinery package services',
    ],
    expertise:
      'We provide comprehensive engineering services for refinery and petrochemical operations, including process design, safety systems, control strategies, mechanical engineering, and detailed design.',
    why: 'Refinery projects demand rigorous engineering across all disciplines. We apply quantitative analysis and proven best practices to ensure reliable, efficient, safe operation.',
    image: '/images/sectors-refining.jpg',
  },
  {
    id: 'storage',
    name: 'Storage & Infrastructure',
    context: 'Storage facilities and infrastructure systems underpin the supply chain. We engineer systems designed for long-term reliability and operational efficiency.',
    projects: [
      'Crude and product storage design',
      'Storage terminal engineering',
      'Buffer tank systems',
      'Infrastructure facility design',
      'Storage system integration',
    ],
    expertise:
      'Experience in engineering storage facilities and infrastructure systems. We understand the technical requirements for reliable, long-term storage operation and the importance of system redundancy.',
    why: 'Storage infrastructure is designed to operate for decades. We apply conservative engineering principles and proven operational practices to ensure reliability and safety.',
    image: '/images/sectors-storage.jpg',
  },
  {
    id: 'utilities',
    name: 'Utilities & Support Systems',
    context: 'Every industrial facility depends on reliable utility systems. We design complete utility packages for steam, power, cooling, compressed air, and specialty gases.',
    projects: [
      'Steam generation and distribution',
      'Power generation systems',
      'Cooling water and heat recovery',
      'Compressed air networks',
      'Specialty gas systems',
    ],
    expertise:
      'Complete utility system design for industrial facilities. We optimize efficiency, redundancy, and operational sustainability across all utility functions.',
    why: 'The best utility systems work reliably and invisibly. We design systems that integrate seamlessly with production, maximize efficiency, and operate with minimal maintenance.',
    image: '/images/sectors-utilities.jpg',
  },
]

export const CASE_STUDIES: CaseStudy[] = []

export const QHSE_PILLARS = [
  {
    title: 'Quality Assurance',
    description:
      'We maintain comprehensive quality protocols across all design outputs. Every document undergoes independent technical review and is traced to recognised standards and client specifications.',
    practices: [
      'Document control & version management',
      'Peer review & independent verification',
      'Standard compliance & traceability',
      'Corrective action & continuous improvement',
    ],
  },
  {
    title: 'Health & Safety',
    description:
      'Safety is engineered into every system from the outset. We apply HAZOP methodology, SIL assessment, and quantitative risk analysis to eliminate hazards and manage residual risk.',
    practices: [
      'HAZOP & LOPA studies',
      'SIL specification & safety validation',
      'Occupational hazard assessment',
      'Emergency response & evacuation planning',
    ],
  },
  {
    title: 'Environmental Protection',
    description:
      'We engineer systems designed to protect the environment while maintaining operational efficiency. Our approach integrates emissions control, waste minimisation, and resource conservation.',
    practices: [
      'Emissions minimisation & control',
      'Waste & discharge management',
      'Resource efficiency & conservation',
      'Environmental impact assessment',
    ],
  },
  {
    title: 'Regulatory Compliance',
    description:
      'Our designs comply with all applicable international standards and local regulations. We engage with authorities and maintain transparent compliance documentation throughout project delivery.',
    practices: [
      'Regulatory landscape assessment',
      'Standard compliance verification',
      'Authority engagement & permits',
      'Compliance documentation & traceability',
    ],
  },
]
