import { Dataset } from '@/types';

export const sampleDataset: Dataset = {
  name: "DPO Training Dataset",
  entries: [
    {
      id: "1",
      prompt: "Explain the concept of quantum entanglement to a high school student.",
      response_a: "Quantum entanglement is like having two magical coins that always show opposite sides when flipped, no matter how far apart they are. When two particles become entangled, they share a special connection where the state of one particle instantly affects the other, even if they're separated by vast distances. This 'spooky action at a distance,' as Einstein called it, is a fundamental principle of quantum mechanics.",
      response_b: "Quantum entanglement occurs when pairs or groups of particles interact in ways such that the quantum state of each particle cannot be described independently. Instead, a quantum mechanical description of the system can only be given for the pair or group as a whole. This phenomenon demonstrates quantum mechanical effects on a macroscopic scale."
    },
    {
      id: "2",
      prompt: "Write a creative story about a time traveler's first journey.",
      response_a: "The chronometer beeped insistently as Sarah adjusted the temporal coordinates. Her hands trembled, not from fear, but from excitement. Years of theoretical research had led to this moment. The capsule hummed to life, its crystalline walls pulsing with an otherworldly blue light. As the countdown reached zero, reality itself seemed to fold around her. In that instant, she understood that time wasn't a river flowing in one direction, but an ocean of infinite possibilities.",
      response_b: "When John activated the time machine, there was a bright flash of light. He found himself in the past, specifically in the year 1920. Everything looked different, and he was amazed by how people dressed and behaved. He spent the day exploring the city and learning about history firsthand. Finally, he returned to his own time with many interesting stories to tell."
    }
  ]
};