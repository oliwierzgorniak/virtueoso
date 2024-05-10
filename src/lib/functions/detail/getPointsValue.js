// From rating (like good) the function gives points value
export default function getPointsValue(rating) {
  if (rating == "very bad") return -10;
  else if (rating == "bad") return -5;
  else if (rating == "neutral") return -2;
  else if (rating == "good") return 5;
  else if (rating == "very good") return 10;
}
