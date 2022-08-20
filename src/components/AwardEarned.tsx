import { Layout } from "./Layout";
import { FaCheck } from "react-icons/fa";

export default function AwardEarned() {
  return (
    <Layout hasSearch={false}>
      {/* <div>Award Earned</div>
      <div>C02 saved</div>
      <div>10kg</div>
      <div>You reduced your </div>
      <div>carbon emissions by 10kg! </div>
      <div>Back</div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: 597,
          width: 597,
          alignItems: "center",
          justifyContent: 'flex-end',
          gap: 10,
          backgroundColor: "rgb(50, 119, 102, 0.6)",
          marginLeft: 'calc((597px - 390px) / -2)',
          marginTop: 'calc(-590px + 150px)',
          borderBottomLeftRadius: '100%',
          borderBottomRightRadius: '100%'
        }}
      >
        <div style={{fontSize: 24, paddingTop: 40, color: 'white'}}>Great Job!</div>
        <div style={{paddingBottom: 40}}>
          <FaCheck className="text-green-500" size={49/428*390} color="white" />
        </div>
      </div>
      <div>Discount</div>
      <div>20%</div>
      <div>You earned a 20% discount towards any </div>
      <div>AT HOP monthly pass</div>
      <div>Back</div>
    </Layout>
  );
}
