import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../app/store";
import { removeWaste } from "../wasteSlice";
import WasteForm from "./WasteForm";

const WasteList = () => {
    const wastes = useSelector((state: RootState) => state.waste.list);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>📦 Danh sách rác thu gom</h2>
            <WasteForm />
            <ul>
                {wastes.map((w) => (
                    <li key={w.id}>
                        {w.type} – {w.weight}kg
                        <button onClick={() => dispatch(removeWaste(w.id))}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WasteList;
