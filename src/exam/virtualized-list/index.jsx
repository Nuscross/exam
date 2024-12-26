import { FixedSizeList as List } from "react-window";

const VirtualizedList = () => {

  const ListData = ({ index, style }) => (
    <div className={`flex items-center justify-center p-3 ${index % 2 && "item-odd"}`} style={style}>
      List Number {index + 1}
    </div>
  )

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6">
      <h1 className="mb-7 text-3xl font-bold ">Virtualized List Component</h1>
      <div className="border border-solid border-black p-5 text-center rounded">
        <List
          height={400}
          itemCount={100000}
          itemSize={50}
          width={300}
        >
          {ListData}
        </List>
      </div>
    </div>
  )
}

export default VirtualizedList;