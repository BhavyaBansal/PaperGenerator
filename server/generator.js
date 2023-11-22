const prompt = require("prompt-sync")();
const fs = require("fs");
const PDFDocument = require("pdfkit");
let questions = [
  {
    question: "What is the concept of quantum entanglement?",
    category: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Calculate the molarity of a solution with 4 moles of solute in 2 liters of solvent.",
    category: "Chemistry",
    topic: "Solutions",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Simplify the expression: (3x^2 + 2x - 5) / (x - 1).",
    category: "Mathematics",
    topic: "Algebra",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Describe the process of nuclear fission.",
    category: "Physics",
    topic: "Nuclear Physics",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Identify the types of chemical bonds present in CO2.",
    category: "Chemistry",
    topic: "Chemical Bonding",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Find the limit of the function lim(x → 2) (x^2 - 4) / (x - 2).",
    category: "Mathematics",
    topic: "Calculus",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Explain the laws of thermodynamics.",
    category: "Physics",
    topic: "Thermodynamics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Balance the chemical equation: C4H10 + O2 → CO2 + H2O.",
    category: "Chemistry",
    topic: "Chemical Reactions",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Find the roots of the quadratic equation: 2x^2 - 5x + 3 = 0.",
    category: "Mathematics",
    topic: "Algebra",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Explain the concept of electromagnetic induction.",
    category: "Physics",
    topic: "Electricity and Magnetism",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Define the terms 'acid' and 'base' in the context of chemistry.",
    category: "Chemistry",
    topic: "Acids and Bases",
    difficulty: "Easy",
    points: 5,
  },
  {
    question:
      "Solve the system of linear equations using matrix inversion: 2x + y = 8, 3x - 2y = 1.",
    category: "Mathematics",
    topic: "Linear Algebra",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Explain the concept of wave-particle duality in quantum mechanics.",
    category: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Calculate the pH of a solution with a hydrogen ion concentration of 1 x 10^-4 M.",
    category: "Chemistry",
    topic: "Acids and Bases",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Find the integral of the function ∫(3x^2 + 2x + 1)dx.",
    category: "Mathematics",
    topic: "Calculus",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Describe the principles of special relativity.",
    category: "Physics",
    topic: "Relativity",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Identify the isomers of C6H12.",
    category: "Chemistry",
    topic: "Organic Chemistry",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Solve the trigonometric equation: sin(x) + cos(x) = 1.",
    category: "Mathematics",
    topic: "Trigonometry",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Explain the concept of magnetic fields and their applications.",
    category: "Physics",
    topic: "Electricity and Magnetism",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Balance the chemical equation: N2 + H2 → NH3.",
    category: "Chemistry",
    topic: "Chemical Reactions",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Find the solution to the differential equation: dy/dx = 2x.",
    category: "Mathematics",
    topic: "Differential Equations",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Explain the concept of black holes in astrophysics.",
    category: "Physics",
    topic: "Astrophysics",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Discuss the properties and uses of noble gases.",
    category: "Chemistry",
    topic: "Periodic Table",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Solve the quadratic equation: x^2 - 6x + 9 = 0.",
    category: "Mathematics",
    topic: "Algebra",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Explain the concept of entropy in thermodynamics.",
    category: "Physics",
    topic: "Thermodynamics",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Name the products formed in the combustion of methane.",
    category: "Chemistry",
    topic: "Chemical Reactions",
    difficulty: "Easy",
    points: 5,
  },
  {
    question:
      "Calculate the value of π to five decimal places using the arctangent function.",
    category: "Mathematics",
    topic: "Trigonometry",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Discuss the concept of dark matter in the universe.",
    category: "Physics",
    topic: "Astrophysics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Define Avogadro's number and its significance in chemistry.",
    category: "Chemistry",
    topic: "General Chemistry",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Evaluate the integral ∫(4x^3 + 2x^2 - 7)dx.",
    category: "Mathematics",
    topic: "Calculus",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Explain the concept of wave interference.",
    category: "Physics",
    topic: "Waves",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Identify the characteristics of alkali metals.",
    category: "Chemistry",
    topic: "Periodic Table",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Solve the system of equations: 3x - y = 7 and 2x + y = 4.",
    category: "Mathematics",
    topic: "Linear Algebra",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Explain the principles of optics in physics.",
    category: "Physics",
    topic: "Optics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Discuss the concept of hybridization in organic chemistry.",
    category: "Chemistry",
    topic: "Organic Chemistry",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Calculate the volume of a sphere with a radius of 5 units.",
    category: "Mathematics",
    topic: "Geometry",
    difficulty: "Easy",
    points: 5,
  },
  {
    question:
      "Explain the concept of wave-particle duality in quantum mechanics.",
    category: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Define the terms 'oxidation' and 'reduction' in chemical reactions.",
    category: "Chemistry",
    topic: "Redox Reactions",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Solve the trigonometric equation: cos(2x) = 0.",
    category: "Mathematics",
    topic: "Trigonometry",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Explain the concept of magnetic resonance imaging (MRI) in medicine.",
    category: "Physics",
    topic: "Medical Physics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Name the three states of matter and describe their characteristics.",
    category: "Chemistry",
    topic: "States of Matter",
    difficulty: "Easy",
    points: 5,
  },
  {
    question:
      "Find the solution to the system of inequalities: 2x + y < 5 and x - y > 1.",
    category: "Mathematics",
    topic: "Linear Algebra",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Discuss the concept of dark energy in cosmology.",
    category: "Physics",
    topic: "Cosmology",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Identify the factors influencing reaction rates in chemical kinetics.",
    category: "Chemistry",
    topic: "Chemical Kinetics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Evaluate the integral ∫e^x dx.",
    category: "Mathematics",
    topic: "Calculus",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Explain the concept of electrical conductivity in metals.",
    category: "Physics",
    topic: "Electricity and Magnetism",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Define the term 'stoichiometry' and its application in chemical reactions.",
    category: "Chemistry",
    topic: "Stoichiometry",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Solve the logarithmic equation: log2(x) = 3.",
    category: "Mathematics",
    topic: "Algebra",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Discuss the concept of wave polarization in physics.",
    category: "Physics",
    topic: "Waves",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Identify the properties and uses of halogens.",
    category: "Chemistry",
    topic: "Periodic Table",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Solve the system of equations: 4x - 2y = 10 and 2x + y = 5.",
    category: "Mathematics",
    topic: "Linear Algebra",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Explain the concept of wave dispersion in optics.",
    category: "Physics",
    topic: "Optics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Discuss the principles of acid-base titrations in analytical chemistry.",
    category: "Chemistry",
    topic: "Analytical Chemistry",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Calculate the surface area of a cylinder with a radius of 3 units and a height of 8 units.",
    category: "Mathematics",
    topic: "Geometry",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Explain the concept of nuclear fusion in stars.",
    category: "Physics",
    topic: "Astrophysics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Define the terms 'oxidizing agent' and 'reducing agent' in redox reactions.",
    category: "Chemistry",
    topic: "Redox Reactions",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Solve the trigonometric equation: tan(x) = 1.",
    category: "Mathematics",
    topic: "Trigonometry",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Explain the principles of nuclear magnetic resonance (NMR) spectroscopy.",
    category: "Physics",
    topic: "Nuclear Physics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Name the common types of organic reactions and provide examples.",
    category: "Chemistry",
    topic: "Organic Chemistry",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Calculate the probability of rolling a sum of 7 with two six-sided dice.",
    category: "Mathematics",
    topic: "Probability",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Explain the concept of wave interference in the context of Young's double-slit experiment.",
    category: "Physics",
    topic: "Waves",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Identify the properties and uses of alkali earth metals.",
    category: "Chemistry",
    topic: "Periodic Table",
    difficulty: "Easy",
    points: 5,
  },
  {
    question:
      "Solve the system of linear equations: 5x + 2y = 11 and 3x - y = 5.",
    category: "Mathematics",
    topic: "Linear Algebra",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Explain the concept of total internal reflection in optics.",
    category: "Physics",
    topic: "Optics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Discuss the principles of chromatography in analytical chemistry.",
    category: "Chemistry",
    topic: "Analytical Chemistry",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "What is the speed of light?",
    category: "Physics",
    topic: "Waves",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Define the concept of a mole in chemistry.",
    category: "Chemistry",
    topic: "General Chemistry",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Solve the equation: 3x + 7 = 22.",
    category: "Mathematics",
    topic: "Algebra",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Explain the principles of Newton's first law of motion.",
    category: "Physics",
    topic: "Classical Mechanics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Balance the chemical equation: H2 + O2 → H2O.",
    category: "Chemistry",
    topic: "Chemical Reactions",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Find the derivative of f(x) = 2x^2 + 3x + 1.",
    category: "Mathematics",
    topic: "Calculus",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Explain the concept of electric potential energy.",
    category: "Physics",
    topic: "Electricity and Magnetism",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Name the elements in Group 17 of the periodic table.",
    category: "Chemistry",
    topic: "Periodic Table",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Solve the system of equations: 2x - y = 5 and x + y = 3.",
    category: "Mathematics",
    topic: "Linear Algebra",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Explain the concept of quantum entanglement.",
    category: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Calculate the molarity of a solution with 4 moles of solute in 2 liters of solvent.",
    category: "Chemistry",
    topic: "Solutions",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Simplify the expression: (3x^2 + 2x - 5) / (x - 1).",
    category: "Mathematics",
    topic: "Algebra",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Describe the process of nuclear fission.",
    category: "Physics",
    topic: "Nuclear Physics",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Identify the types of chemical bonds present in CO2.",
    category: "Chemistry",
    topic: "Chemical Bonding",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Find the limit of the function lim(x → 2) (x^2 - 4) / (x - 2).",
    category: "Mathematics",
    topic: "Calculus",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Explain the laws of thermodynamics.",
    category: "Physics",
    topic: "Thermodynamics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Balance the chemical equation: C4H10 + O2 → CO2 + H2O.",
    category: "Chemistry",
    topic: "Chemical Reactions",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Find the roots of the quadratic equation: 2x^2 - 5x + 3 = 0.",
    category: "Mathematics",
    topic: "Algebra",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Explain the concept of electromagnetic induction.",
    category: "Physics",
    topic: "Electricity and Magnetism",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Define the terms 'acid' and 'base' in the context of chemistry.",
    category: "Chemistry",
    topic: "Acids and Bases",
    difficulty: "Easy",
    points: 5,
  },
  {
    question:
      "Solve the system of linear equations using matrix inversion: 2x + y = 8, 3x - 2y = 1.",
    category: "Mathematics",
    topic: "Linear Algebra",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Explain the concept of wave-particle duality in quantum mechanics.",
    category: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Calculate the pH of a solution with a hydrogen ion concentration of 1 x 10^-4 M.",
    category: "Chemistry",
    topic: "Acids and Bases",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Find the integral of the function ∫(3x^2 + 2x + 1)dx.",
    category: "Mathematics",
    topic: "Calculus",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Describe the principles of special relativity.",
    category: "Physics",
    topic: "Relativity",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Identify the isomers of C6H12.",
    category: "Chemistry",
    topic: "Organic Chemistry",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Solve the trigonometric equation: sin(x) + cos(x) = 1.",
    category: "Mathematics",
    topic: "Trigonometry",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Explain the concept of magnetic fields and their applications.",
    category: "Physics",
    topic: "Electricity and Magnetism",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Balance the chemical equation: N2 + H2 → NH3.",
    category: "Chemistry",
    topic: "Chemical Reactions",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Find the solution to the differential equation: dy/dx = 2x.",
    category: "Mathematics",
    topic: "Differential Equations",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Explain the concept of black holes in astrophysics.",
    category: "Physics",
    topic: "Astrophysics",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Discuss the Heisenberg Uncertainty Principle and its implications in quantum mechanics.",
    category: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Examine the process of electrolysis and its applications in chemistry.",
    category: "Chemistry",
    topic: "Electrochemistry",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Solve the definite integral: ∫(0 to π) sin(x)dx.",
    category: "Mathematics",
    topic: "Calculus",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Explain the concept of dark matter and its role in the universe.",
    category: "Physics",
    topic: "Astrophysics",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Define velocity and provide its basic formula.",
    category: "Physics",
    topic: "Kinematics",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Explain the concept of inertia in Newtonian mechanics.",
    category: "Physics",
    topic: "Classical Mechanics",
    difficulty: "Easy",
    points: 5,
  },
  {
    question:
      "Describe the behavior of light in terms of reflection and refraction.",
    category: "Physics",
    topic: "Optics",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "State the first law of thermodynamics and provide an example.",
    category: "Physics",
    topic: "Thermodynamics",
    difficulty: "Easy",
    points: 5,
  },
  {
    question:
      "Define the term 'wave' and explain the basic properties of waves.",
    category: "Physics",
    topic: "Waves",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Discuss the difference between transverse and longitudinal waves.",
    category: "Physics",
    topic: "Waves",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Explain the phenomenon of interference in the context of wave behavior.",
    category: "Physics",
    topic: "Waves",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Define the amplitude of a wave and discuss its significance.",
    category: "Physics",
    topic: "Waves",
    difficulty: "Easy",
    points: 5,
  },
  {
    question:
      "Describe the concept of frequency and its relationship with the wavelength of a wave.",
    category: "Physics",
    topic: "Waves",
    difficulty: "Easy",
    points: 5,
  },
  {
    question:
      "Examine the properties of standing waves and provide an example.",
    category: "Physics",
    topic: "Waves",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Discuss the phenomenon of resonance and its applications in various fields.",
    category: "Physics",
    topic: "Waves",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Explain the concept of phase velocity in the context of wave propagation.",
    category: "Physics",
    topic: "Waves",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Define Doppler Effect and discuss how it applies to both sound and light waves.",
    category: "Physics",
    topic: "Waves",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Discuss the concept of diffraction and provide examples of its occurrence in everyday situations.",
    category: "Physics",
    topic: "Waves",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Explain the wave-particle duality of matter in quantum mechanics.",
    category: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Describe the Schrödinger equation and its significance in quantum mechanics.",
    category: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Discuss the Heisenberg Uncertainty Principle and its implications.",
    category: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Examine the concept of quantum entanglement and its role in quantum theory.",
    category: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Define quantum tunneling and provide an example of its occurrence.",
    category: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Discuss the principles of quantum superposition and its experimental evidence.",
    category: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Explain the concept of quantum spin and its importance in particle physics.",
    category: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Describe the quantum harmonic oscillator and its applications in quantum systems.",
    category: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Discuss the role of quantum mechanics in explaining the behavior of electrons in atoms.",
    category: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Define quantum decoherence and its implications in quantum computing.",
    category: "Physics",
    topic: "Quantum Mechanics",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Explain the concept of special relativity and its key postulates.",
    category: "Physics",
    topic: "Relativity",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Discuss time dilation and length contraction in the context of special relativity.",
    category: "Physics",
    topic: "Relativity",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Examine the equivalence principle and its role in general relativity.",
    category: "Physics",
    topic: "Relativity",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Define spacetime and explain how it is affected by gravity according to general relativity.",
    category: "Physics",
    topic: "Relativity",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Discuss the concept of gravitational time dilation and its observational implications.",
    category: "Physics",
    topic: "Relativity",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Explain the phenomenon of gravitational waves and how they are detected.",
    category: "Physics",
    topic: "Relativity",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Describe the twin paradox and its consequences in the context of special relativity.",
    category: "Physics",
    topic: "Relativity",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Examine the concept of black holes and their role in general relativity.",
    category: "Physics",
    topic: "Relativity",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Discuss the experimental evidence supporting Einstein's theory of relativity.",
    category: "Physics",
    topic: "Relativity",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Explain the concept of a wormhole and its theoretical implications in spacetime.",
    category: "Physics",
    topic: "Relativity",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Define electric charge and discuss the two types of electric charges.",
    category: "Physics",
    topic: "Electricity",
    difficulty: "Easy",
    points: 5,
  },
  {
    question: "Explain Coulomb's Law and its mathematical expression.",
    category: "Physics",
    topic: "Electricity",
    difficulty: "Easy",
    points: 5,
  },
  {
    question:
      "Discuss the concept of an electric field and its relationship with electric charges.",
    category: "Physics",
    topic: "Electricity",
    difficulty: "Easy",
    points: 5,
  },
  {
    question:
      "Define electric potential and explain the difference between potential and potential energy.",
    category: "Physics",
    topic: "Electricity",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Describe the working principle of a capacitor and its applications.",
    category: "Physics",
    topic: "Electricity",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Examine Ohm's Law and its applications in electrical circuits.",
    category: "Physics",
    topic: "Electricity",
    difficulty: "Medium",
    points: 10,
  },
  {
    question: "Discuss the concept of electrical resistance and its factors.",
    category: "Physics",
    topic: "Electricity",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Define electric current and explain the drift velocity of charge carriers.",
    category: "Physics",
    topic: "Electricity",
    difficulty: "Hard",
    points: 15,
  },
  {
    question:
      "Explain the behavior of electrical circuits in series and parallel configurations.",
    category: "Physics",
    topic: "Electricity",
    difficulty: "Medium",
    points: 10,
  },
  {
    question:
      "Discuss the principles of electromagnetism and the role of magnetic fields in electrical systems.",
    category: "Physics",
    topic: "Electricity",
    difficulty: "Medium",
    points: 10,
  },
];
// console.log(questions.length);

// Dummy Format
// ---------------
// const input = {marks:100,subject:"physics",difficulty:{easy:20,medium:50,hard:30},topic:{}};

let input = {};
let marks = prompt("Enter total marks of question paper: ");
input.marks = marks;
input.points = { easy: "5", medium: "10", hard: "15" };
let subject = prompt("Enter subject of question paper: ");
input.subject = subject.charAt(0).toUpperCase() + subject.substring(1);
input.difficulty = new Object();
let difEasy = prompt("Enter total marks for 'easy' questions: ");
input.difficulty.easy = difEasy;
let difMedium = prompt("Enter total marks for 'medium' questions: ");
input.difficulty.medium = difMedium;
let difHard = prompt("Enter total marks for 'hard' questions: ");
input.difficulty.hard = difHard;
input.topics = new Array();
let topicCheck = prompt(
  "Do you want to make a question paper topic wise by entering the percentage of questions each topic will hold? If 'yes' enter 1 otherwise enter anything else: "
);
if (topicCheck === "1") {
  let topicsArr = new Array();
  var check;
  do {
    let topicName = prompt("Enter the name of the topic: ");
    let percentage = prompt(
      "Enter the percent of questions you want from this topic: "
    );
    topicsArr.push(new Array(topicName, percentage));
    check = prompt(
      "DO you want to continue adding topics? if 'yes' press 1 otherwise anything else: "
    );
  } while (check === "1");
  input.topics = topicsArr;
}

// Reference Input Format 1:
// ------------
// {
//   marks: '100',
//   points: { easy: '5', medium: '10', hard: '15' },
//   subject: 'Physics',
//   difficulty: { easy: '20', medium: '50', hard: '30' },
//   topics: [ [ 'Waves', 3 ], [ 'Relativity', 4 ], [ 'Electricity', 4 ] ]
// }

// Demo 2:
// ------------

// {
//   marks: '100',
//   subject: 'physics',
//   difficulty: { easy: '20', medium: '50', hard: '30' },
//   topics: {}
// }

let noOfEasyQuestions =
  parseInt(input.difficulty.easy) / parseInt(input.points.easy);
let noOfMediumQuestions =
  parseInt(input.difficulty.medium) / parseInt(input.points.medium);
let noOfHardQuestions =
  parseInt(input.difficulty.hard) / parseInt(input.points.hard);

let totalQuestions =
  noOfEasyQuestions + noOfMediumQuestions + noOfHardQuestions;
console.log(input.topics.length);
if (input.topics.length != 0) {
  let count = 0;
  for (let i = 0; i < input.topics.length; i++) {
    input.topics[i][1] = Math.round(
      (input.topics[i][1] * totalQuestions) / 100
    );
    count += input.topics[i][1];
  }
  // console.log(count,totalQuestions);
  if (count < totalQuestions) {
    input.topics[input.topics.length - 1][1] += totalQuestions - count;
  }
}
console.log(input);

// getting all questions of wanted subject
let subjectQuestions = questions.filter(
  (ques) => ques.category === input.subject
);
// console.log(subjectQuestions.length);
let questionPaper = [];
if (input.topics.length == 0) {
  let count = noOfMediumQuestions;
  let questionPaperMedium = subjectQuestions.filter(
    (ques) => ques.difficulty === "Medium" && count-- > 0
  );
  count = noOfEasyQuestions;
  let questionPaperEasy = subjectQuestions.filter(
    (ques) => ques.difficulty === "Easy" && count-- > 0
  );
  count = noOfHardQuestions;
  let questionPaperHard = subjectQuestions.filter(
    (ques) => ques.difficulty === "Hard" && count-- > 0
  );
  let filteredQuestions = [
    ...questionPaperEasy,
    ...questionPaperMedium,
    ...questionPaperHard,
  ];
  questionPaper = questionPaper.concat(filteredQuestions);
} else {
  let cm = noOfMediumQuestions;
  let ce = noOfEasyQuestions;
  let ch = noOfHardQuestions;
  for (let i = 0; i < input.topics.length; i++) {
    let count = input.topics[i][1];
    let filteredQuestions = subjectQuestions.filter(function check(ques) {
      if (count > 0) {
        if (
          cm > 0 &&
          ques.difficulty === "Medium" &&
          ques.topic === input.topics[i][0]
        ) {
          cm--;
          count--;
          return true;
        } else if (
          ce > 0 &&
          ques.difficulty === "Easy" &&
          ques.topic === input.topics[i][0]
        ) {
          ce--;
          count--;
          return true;
        } else if (
          ch > 0 &&
          ques.difficulty === "Hard" &&
          ques.topic === input.topics[i][0]
        ) {
          ch--;
          count--;
          return true;
        }
      }
      return false;
    });
    questionPaper = questionPaper.concat(filteredQuestions);
  }
}

console.log(questionPaper);

const pdfDoc = new PDFDocument();
pdfDoc.pipe(fs.createWriteStream("question_paper.pdf"));

pdfDoc
  .fontSize(18)
  .text(
    `${input.subject} Question Paper:                             Total Marks: ${marks}`,
    { bold: true }
  );
pdfDoc.moveDown(); // Add a line break

let i = 1;
questionPaper.forEach((q) => {
  pdfDoc
    .fontSize(10)
    .text(`Q${i}) ` + q.question, { width: 400, align: "left" });
  pdfDoc
    .fontSize(7)
    .text("Topic: " + q.topic, { align: "right" })
    .text("Marks: " + q.points.toString(), { align: "right" });
  pdfDoc.moveDown(); // Add a line break
  i++;
});
pdfDoc.end();

console.log("Question Paper PDF generated successfully.");
