exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("classes")
    .delete()
    .then(function () {
      // Inserts seed entries
      return knex("classes").insert([
        {
          name: "CrossFit",
          date: "Thursday & Saturday 11:00 AM",
          location: "123 Main Street",
          type: "general",
          startTime: "06/30/2020",
          intensityLevel: "medium",
          description:
            "With constantly varied, high-intensity functional movements, CrossFit is a training philosophy that coaches people of all shapes and sizes to improve their physical well-being and cardiovascular fitness in a hardcore yet accepting and encouraging environment.",
          duration: "1 month",
          instructorId: 1,
          maxClassSize: 20,
        },
        {
          name: "Tai-Chi",
          date: "Saturday 11:00 AM",
          location: "456 Parker Ave",
          type: "martial-art",
          startTime: "06/20/2020",
          intensityLevel: "hard",
          description:
            "Tai chi is an ancient Chinese tradition that, today, is practiced as a graceful form of exercise. It involves a series of movements performed in a slow, focused manner and accompanied by deep breathing.",
          duration: "3 months",
          instructorId: 3,
          maxClassSize: 20,
        },
        {
          name: "Yoga",
          date: "Sunday 9:00 AM",
          location: "1600 Fox Drive",
          type: "Yoga",
          startTime: "06/28/2020",
          intensityLevel: "easy",
          description:
            "In this class the basic, foundational yoga postures are practiced to align, strengthen and promote flexibility in the body. Breathing techniques and meditation are also integrated. You can expect an emphasis on simplicity, repetition, and ease of movement.",
          duration: "1 month",
          instructorId: 1,
          maxClassSize: 20,
        },
        {
          name: "Pilates",
          date: "MWF 11:00 AM",
          location: "123 Main Street",
          type: "general",
          startTime: "06/15/2020",
          intensityLevel: "easy",
          description:
            "Pilates is a method of exercise that consists of low-impact flexibility and muscular strength and endurance movements. Pilates emphasizes proper postural alignment, core strength and muscle balance.",
          duration: "1 month",
          instructorId: 3,
          maxClassSize: 20,
        },
      ]);
    });
};
