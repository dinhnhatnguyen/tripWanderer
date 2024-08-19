import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hompage from "./Components/Hompage";
import Discovery from "./Components/Discovery";
import Layout from "./Components/Layout/Layout";
import TripDetails from "./Components/TripDetails";

function App() {
  const trip = {
    title: "Thung lũng Mai Châu 2N1Đ sống như người dân tộc Thái",
    local: "Hòa Bình, VN",
    thumbnail:
      "https://imgg.stripical.xyz/argKvOgYr4PxjnvOvULtAynPAtc=/500x/img.stripical.xyz/trip/64549bc240995f7e90fdcd0f/A46DD",
    price: 0,
    rating: { score: 88, count: 194 },
    summary: [
      "Chuyến đi phù hợp cho mọi đối tượng, từ gia đình đến nhóm bạn.",
      "Bao gồm các điểm tham quan nổi tiếng và chi phí hợp lý.",
    ],
    introduction:
      "Một hành trình khám phá tuyệt vời, phù hợp cho những ai yêu thích phiêu lưu và khám phá.",
    itinerary: [
      {
        day: 1,
        activities: [
          { time: "11:30", description: "Hoạt động tại điểm đến ngày 1" },
        ],
      },
      {
        day: 2,
        activities: [
          { time: "18:30", description: "Hoạt động tại điểm đến ngày 2" },
        ],
      },
      {
        day: 3,
        activities: [
          { time: "14:00", description: "Hoạt động tại điểm đến ngày 3" },
        ],
      },
    ],
  };
  return (
    <Routes>
      <Route path="/" element={<Hompage />} />
      <Route path="/discovery" element={<Discovery />} />
      <Route path="/trip/id" element={<TripDetails trip={trip} />} />
    </Routes>
  );
}

export default App;
