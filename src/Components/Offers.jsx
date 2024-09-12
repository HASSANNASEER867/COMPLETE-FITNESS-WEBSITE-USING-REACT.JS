import React from "react";

const services = [
  {
    title: "Personal Training",
    description: "One-on-one sessions with a certified trainer tailored to individual fitness goals and needs.",
    imageUrl: "https://media.istockphoto.com/id/1601422924/photo/personal-trainer-helping-senior-man-training-at-the-gym.webp?a=1&b=1&s=612x612&w=0&k=20&c=IyMtm_vUaUUCMumXkd-pz7CyhUnByYa79yoeiUvOYfk=",
  },
  {
    title: "Group Fitness Classes ",
    description: "Classes like yoga, pilates, Zumba, and HIIT that provide a community workout environment.",
    imageUrl: "https://media.istockphoto.com/id/1324877187/photo/close-up-of-athletic-woman-rolling-up-her-exercise-mat-after-practicing-at-health-club.webp?a=1&b=1&s=612x612&w=0&k=20&c=m879hSkYbw4_0GMeKpIv7UdGSBBgQgUFrfEisjJo5Rc=",
  },
  {
    title: " Nutrition Counseling",
    description: " Guidance on diet and nutrition to complement fitness goals and improve overall health.",
    imageUrl: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE51dHJpdGlvbiUyMENvdW5zZWxpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Strength Training Programs",
    description: " Customized weightlifting and resistance training routines to build muscle and strength.",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fFN0cmVuZ3RoJTIwVHJhaW5pbmclMjBQcm9ncmFtc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Cardiovascular Training",
    description: " Workouts designed to improve cardiovascular health and endurance, including running, cycling, and rowing.",
    imageUrl: "https://media.istockphoto.com/id/925425730/photo/close-up-shot-of-a-monitor-with-ekg-data-male-athlete-runs-on-a-treadmill-with-electrodes.webp?a=1&b=1&s=612x612&w=0&k=20&c=KUKKu8B63L87G1Jh-BbBqMDLgbeiPXheCfteR7skUQw=",
  },
  {
    title: "Flexibility and Mobility Training",
    description: " Exercises and stretches aimed at increasing flexibility and joint mobility, often including yoga or dynamic stretching.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1675364966858-0be2c0d58d77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmxleGliaWxpdHklMjBhbmQlMjBNb2JpbGl0eSUyMFRyYWluaW5nfGVufDB8fDB8fHww",
  },
  {
    title: "Functional Training",
    description: " Workouts that enhance everyday movement skills and functional strength, such as balance and coordination exercises.",
    imageUrl: "https://media.istockphoto.com/id/482165998/photo/sportsman-exercising-ball-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=bCNNyTJNm0wt2xd3qfqCB-Ts6gLy_krr0ENjfvElKxA=",
  },
  {
    title: "Sports-Specific Training",
    description: " Tailored programs to enhance performance in specific sports, such as basketball, soccer, or tennis.",
    imageUrl: "https://media.istockphoto.com/id/1152012544/photo/men-training-with-barbells.webp?a=1&b=1&s=612x612&w=0&k=20&c=dfIbXxNQejbiKKBREMD7I4024U41K1Y1_AIZ3Cc-R5A=",
  },
  {
    title: "Rehabilitation and Injury Prevention",
    description: " Programs designed to aid in recovery from injuries and prevent future injuries through targeted exercises and therapies.",
    imageUrl: "https://media.istockphoto.com/id/1143400998/photo/senior-man-giving-steps-in-parallel-bars.webp?a=1&b=1&s=612x612&w=0&k=20&c=jWXcHN-xKbBRAClgZ2megAiDQEWdLWIqMdPBh6EfpQ8=",
  },
  {
    title: "Core Strength Training",
    description: " Focused exercises to strengthen the abdominal and lower back muscles, enhancing overall stability and posture.",
    imageUrl: "https://media.istockphoto.com/id/1179556169/photo/side-view-of-handsome-caucasian-muscular-man-lying-down-on-mat-and-lifting-kettle-bell.webp?a=1&b=1&s=612x612&w=0&k=20&c=_5ifB1kZ5QaeUKQ840QU6RqIOpFEqevk9ESFW6JVOhw=",
  },
  {
    title: "Weight Loss Programs",
    description: " Comprehensive plans combining exercise, nutrition, and lifestyle changes to support weight loss goals.",
    imageUrl: "https://media.istockphoto.com/id/521708997/photo/looking-good.webp?a=1&b=1&s=612x612&w=0&k=20&c=iFOF9j-n3FiANLkMshdoVwkPABnxzYO1yZe4yzc2YW0=",
  },
  {
    title: "Fitness Assessments",
    description: " Evaluations that measure physical fitness levels, including strength, endurance, flexibility, and body composition, to track progress and set goals.",
    imageUrl: "",
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-gray-400 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
            <div className="flex-shrink-0">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full md:w-48 h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
