import Connext from '../icons/Connext'
import Frax from '../icons/Frax'
import Maker from '../icons/Maker'
import MsTable from '../icons/MsTable'
import Sommelier from '../icons/Sommelier'
import Thirdweb from '../icons/Thirdweb'
import Treasure from '../icons/Treasure'

type Props = {}

const TrustedBy = ({}: Props) => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="font-semibold text-lg">Trusted By</h2>
      <ul className="mt-8 grid grid-cols-2 gap-x-16 gap-y-10 max-w-md items-center sm:flex sm:gap-x-4 sm:gap-y-4 sm:flex-wrap sm:justify-evenly">
        <li className="flex justify-center">
          <MsTable className="h-6 text-gray-500/80 dark:text-white" />
        </li>
        <li className="flex justify-center">
          <Maker className="h-5 text-gray-500/80 dark:text-white" />
        </li>
        <li className="flex justify-center">
          <Connext className="h-5 text-gray-500/80 dark:text-white" />
        </li>
        <li className="flex justify-center">
          <Frax className="h-7 text-gray-500/80 dark:text-white" />
        </li>
        <li className="flex justify-center">
          <Thirdweb className="h-5 text-gray-500/80 dark:text-white" />
        </li>
        <li className="flex justify-center">
          <Treasure className="h-12 text-gray-500/80 dark:text-white" />
        </li>
        <li className="flex justify-center">
          <Sommelier className="h-5 text-gray-500/80 dark:text-white" />
        </li>
      </ul>
    </div>
  )
}

export default TrustedBy
