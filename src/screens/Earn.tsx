import { useParams } from "react-router-dom";
import AwardEarned from "../components/AwardEarned";

export function Earn() {
  let { id } = useParams();

  if (id === "1") {
    return (
      <AwardEarned
        containerColor="#FBFFD3"
        topLeadCopy="Great job!"
        circleLeadCopy="20%"
        circleBottomCopy="Discount"
        description="You earned a 20% discount&nbsp;towards any AT&nbsp;HOP monthly pass"
      />
    );
  }
  if (id === "2") {
    return (
      <AwardEarned
        containerColor="#DBECF7"
        topLeadCopy="Surprise!"
        circleLeadCopy="Keychain"
        circleBottomCopy="Earned"
        description="You earned an AT HOP Keychain"
      />
    );
  }
  if (id === "3") {
    return (
      <AwardEarned
        containerColor="#FFFFFF"
        topLeadCopy="Ka pai!"
        circleLeadCopy="$10"
        circleBottomCopy="Claimed"
        description="You earned $10 in AT&nbsp;credit!"
      />
    );
  }
  if (id === "4") {
    return (
      <AwardEarned
        containerColor="rgba(201, 251, 178, 0.31)"
        topLeadCopy="Well done!"
        circleLeadCopy="10kg"
        circleBottomCopy="C02 saved"
        description="You reduced your carbon emissions by 10kg! "
      />
    );
  }
  if (id === "5") {
    return (
      <AwardEarned
        containerColor="#F7E2FF"
        topLeadCopy="Good for you!"
        circleLeadCopy="$10"
        circleBottomCopy="Donated"
        description="You donated $10 to the Red Cross"
      />
    );
  }
  if (id === "6") {
    return (
      <AwardEarned
        containerColor="#DBECF7"
        topLeadCopy="You did it!"
        circleLeadCopy="2 Hours"
        circleBottomCopy="Earned"
        description="You earned free parking for 2 hours at any public&nbsp;park."
      />
    );
  }
  if (id === "7") {
    return (
      <AwardEarned
        containerColor="#DBECF7"
        topLeadCopy="I’m jealous!"
        circleLeadCopy="VIP Status"
        circleBottomCopy="Earned"
        description="You earned VIP status at every park and ride carpark."
      />
    );
  }
  if (id === "8") {
    return (
      <AwardEarned
        containerColor="#ffffff"
        topLeadCopy="Aren’t you proud of yourself?"
        circleLeadCopy="T3"
        circleBottomCopy="Lane Pass"
        description="You earned the right to use a T2 or T3 car lane by yourself!"
      />
    );
  }
  if (id === "9") {
    return (
      <AwardEarned
        containerColor="#f3f3f3"
        topLeadCopy="You’re doing something right!"
        circleLeadCopy="Custom Card"
        circleBottomCopy="Earned"
        description="You earned a custom AT HOP card"
      />
    );
  }
}
