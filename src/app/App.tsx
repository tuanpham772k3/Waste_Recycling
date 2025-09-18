import RewardList from '../features/rewards/components/RewardList'
import WasteList from '../features/waste/components/WasteList'

function App() {

  return (
    <div style={{ padding: "20px" }}>
      <h1>♻️ DỰ ÁN CÔNG NGHỆ THU GOM – TÁI CHẾ RÁC YÊU</h1>
      <WasteList />
      <RewardList />
    </div>
  )
}

export default App
