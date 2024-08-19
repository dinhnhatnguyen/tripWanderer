import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hompage from "./Components/Hompage";
import Discovery from "./Components/Discovery";
import TripDetails from "./Components/TripDetails";

function App() {
  // const trip = {
  //   title: "Thung lũng Mai Châu 2N1Đ sống như người dân tộc Thái",
  //   local: "Hòa Bình, VN",
  //   thumbnail:
  //     "https://imgg.stripical.xyz/argKvOgYr4PxjnvOvULtAynPAtc=/500x/img.stripical.xyz/trip/64549bc240995f7e90fdcd0f/A46DD",
  //   price: 0,
  //   rating: { score: 88, count: 194 },
  //   summary: [
  //     "Chuyến đi phù hợp cho mọi đối tượng, từ gia đình đến nhóm bạn.",
  //     "Bao gồm các điểm tham quan nổi tiếng và chi phí hợp lý.",
  //   ],
  //   introduction:
  //     "Một hành trình khám phá tuyệt vời, phù hợp cho những ai yêu thích phiêu lưu và khám phá.",
  //   itinerary: [
  //     {
  //       day: 1,
  //       activities: [
  //         { time: "11:30", description: "Hoạt động tại điểm đến ngày 1" },
  //         { time: "2:30", description: "Hoạt động tại điểm đến ngày 1" },
  //       ],
  //     },
  //     {
  //       day: 2,
  //       activities: [
  //         { time: "18:30", description: "Hoạt động tại điểm đến ngày 2" },
  //         { time: "20:30", description: "Hoạt động tại điểm đến ngày 2" },
  //       ],
  //     },
  //     {
  //       day: 3,
  //       activities: [
  //         { time: "14:00", description: "Hoạt động tại điểm đến ngày 3" },
  //       ],
  //     },
  //   ],
  // };

  const trip = {
    distance: "228 km",
    local: "Hòa Bình, VN",
    thumbnail: [
      "https://picsum.photos/1000/600?random=0",
      "https://picsum.photos/1000/600?random=1",
    ],
    time: "2 ngày",
    title: "Thung lũng Mai Châu | 2N1Đ sống như người dân tộc Thái",
    author: {
      name: "Author_74",
      avatar: "https://randomuser.me/api/portraits/thumb/men/14.jpg?size=60x50",
    },
    rating: {
      score: 95,
      count: 100,
    },
    lastUpdated: "16 tháng 08, 2024",
    price: 0,
    summary: [
      "Chuyến đi ngắn ngày phù hợp cho mọi người.",
      "Bao gồm các điểm tham quan và chi phí hợp lý.",
    ],
    introduction:
      "Một chuyến đi thú vị dành cho những ai thích khám phá địa phương.",
    itinerary: [
      {
        day: 1,
        activities: [
          {
            time: "08:00",
            description: "Khởi hành từ điểm xuất phát",
          },
          {
            time: "12:00",
            description: "Dừng chân tại điểm tham quan đầu tiên",
          },
        ],
      },
    ],
    area: "nam trung bộ",
    vehicle: "xe máy",
    type: [],
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
