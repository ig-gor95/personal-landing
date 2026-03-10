export function TechStack() {
  const technologies = [
    'Kotlin',
    'Java',
    'Spring Boot',
    'WebFlux',
    'PostgreSQL',
    'Kafka',
    'RabbitMQ',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Elastic Stack',
    'Python',
    'NLP',
  ];

  // Triple the array for seamless looping
  const tripled = [...technologies, ...technologies, ...technologies];

  return (
    <div className="overflow-hidden py-3 -mt-12">
      <div className="animate-scroll whitespace-nowrap">
        {tripled.map((tech, index) => (
          <span
            key={index}
            className="inline-block px-6 py-3 mx-2 text-lg font-medium text-[var(--white-icon)] bg-[#1414149c] border border-[var(--white-icon-tr)] rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}