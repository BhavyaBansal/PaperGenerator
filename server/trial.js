const fs = require("fs");
const PDFDocument = require("pdfkit");

const questions = [
  {
    question: "Explain the concept of wave interference.",
    category: "Physics",
    topic: "Waves",
    difficulty: "Hard",
    points: 15,
  },
  {
    question: "Discuss the concept of wave polarization in physics.",
    category: "Physics",
    topic: "Waves",
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
];
let marks = 100;
let subject = "Physics";
const pdfDoc = new PDFDocument();
pdfDoc.pipe(fs.createWriteStream("question_paper.pdf"));

pdfDoc
  .fontSize(18)
  .text(
    `${subject} Question Paper:                               Total Marks: ${marks}`,
    { bold: true }
  );
pdfDoc.moveDown(); // Add a line break

let i = 1;
questions.forEach((q) => {
  pdfDoc.fontSize(10).text(`Q${i}) `+q.question, { width: 400, align: "left" });
  pdfDoc
    .fontSize(7)
    .text("Topic: " + q.topic, {align: "right" })
    .text("Marks: " + q.points.toString(), { align: "right" });
  pdfDoc.moveDown(); // Add a line break
  i++;
});
pdfDoc.end();

console.log("Question Paper PDF generated successfully.");
