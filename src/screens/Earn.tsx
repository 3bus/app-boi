import { useParams } from "react-router-dom";
import AwardEarned from "../components/AwardEarned";

export function Earn() {
  let { id } = useParams();

  if (id === "1") {
    return (
      <AwardEarned
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
        topLeadCopy="Surprise!"
        circleLeadCopy="Keychain"
        circleBottomCopy="Earned"
        description="You earned a AT HOP Keychain"
      />
    );
  
  }

}
