import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWaste } from "../wasteSlice";
import styles from "./WasteForm.module.css";

const WasteForm = () => {
    const dispatch = useDispatch();
    const [type, setType] = useState("Nhựa");
    const [weight, setWeight] = useState(0);

    const handleSubmit = () => {
        if (weight > 0) {
            dispatch(addWaste({ type, weight }));
            setWeight(0);
        }
    };

    return (
        <div className={styles.form}>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="Nhựa">Nhựa</option>
                <option value="Giấy">Giấy</option>
                <option value="Kim loại">Kim loại</option>
            </select>
            <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                placeholder="Kg"
            />
            <button onClick={handleSubmit}>Thêm</button>
        </div>
    );
};

export default WasteForm;
