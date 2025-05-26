

function ComponentSelection({
  componentList,
  selectedComponentId,
  setSelectedComponentId,
}) {

  if (!componentList || componentList.length === 0) {
    return <p className="text-center text-ivory mt-4">No components available.</p>;
  }
  return (
    <div className="relative top-[10vh] h-[70vh] w-[95%] mx-auto rounded-2xl bg-caramel">
      <div className=" h-full w-[95%] bg-slate rounded-2-2xl">
      {/* selection buttons */}
        <div className="flex justify-center gap-2 py-4 flex-wrap">
            {componentList.map((item) => (
            <button
                key={item.id}
                onClick={() => setSelectedComponentId(item.id)}
                className={`h-[8vh] w-[15%] text-4xl font-tungsten px-8 py-4 gap rounded-lg transition duration-200 ${
                item.id === selectedComponentId
                    ? "bg-caramel text-slate"
                    : "bg-slate text-ivory"
                }`}
            >
                {item.name}
            </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ComponentSelection;