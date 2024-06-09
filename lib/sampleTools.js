const sampleTools = [
  {
    title: "Worksheet Generator",
    description: "Generate a worksheet based on input",
    fields: [
      {
        name: "gradeSelect",
      },
      {
        name: "textarea",
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
