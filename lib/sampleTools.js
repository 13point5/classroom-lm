const sampleTools = [
  {
    title: "Worksheet Generator",
    description: "Generate a worksheet based on input",
    fields: [
      {
        name: "grade",
        component: "gradeSelect",
      },
      {
        name: "topic",
        component: "textarea",
        metadata: {
          label: "Topic or text:",
          placeholder:
            "Mitosis, World War II, paste a block of text or attach a PDF of content to base the worksheet on.",
        },
      },
    ],
  },
];

module.exports = {
  sampleTools,
};
