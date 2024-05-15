// From rating (like good) the function gives points value
export default function getWordValue(rating) {
  if (rating == -10) return "very bad";
  else if (rating == -5) return "bad";
  else if (rating == -2) return "neutral";
  else if (rating == 5) return "good";
  else if (rating == 10) return "very good";
}
