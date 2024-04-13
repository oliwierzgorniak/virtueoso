export default function getFeedback(score) {
  if (score <= -100) return "Unripened potential";
  else if (score <= 0) return "Needs refinement";
  else if (score < 50) return "Blossoming virtue";
  else if (score < 200) return "Exemplary practice";
  else if (score >= 200) return "Embodied virtue";
}
