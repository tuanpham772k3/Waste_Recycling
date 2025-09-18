import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store";

const RewardList = () => {
    const rewards = useSelector((state: RootState) => state.rewards.list);

    return (
        <div>
            <h2>🎁 Đổi quà</h2>
            <ul>
                {rewards.map((r) => (
                    <li key={r.id}>
                        {r.name} – {r.points} điểm
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RewardList;
