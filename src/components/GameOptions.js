import { options } from "../options"
import OptionCard from "./OptionCard"

const GameOptions = ({onOptionSelect}) => {
  return (
    <main className="grid optionCard justify-items-center mb-20">
        {options.map((option, index) => (
            <button key={index} onClick={() => onOptionSelect(option.name)} className="focus:outline-none">
                <OptionCard option={option} />
            </button>
        ))}
    </main>
  )
}

export default GameOptions