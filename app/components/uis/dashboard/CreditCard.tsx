import LinkButton from './LinkButton';

type CreditCardProps = {
  ccColor: string;
  ccName: string;
  balance: string;
  availableCredit: string;
  lastStatement: string;
  minimumAmount: string;
};

export default function CreditCard({ ccName, ccColor, balance, availableCredit, lastStatement, minimumAmount }: CreditCardProps) {
  return (
    <div className="w-full border border-gray-300 bg-better-white">
      <div className="flex items-center gap-5 border-b border-gray-300 p-6">
        <div className={`
          h-[60px] w-[96px] rounded-sm
          ${ccColor}
        `}
        />
        <h2 className="font-semibold">{ccName}</h2>
      </div>
      <div className="flex px-6 py-8">
        <div className="pr-8">
          <h3 className="text-sm text-gray-600">Current Balance</h3>
          <span className="mt-5 block text-3xl font-light">{balance}</span>
          <div className="mt-3 mb-5 flex items-center gap-2 text-sm font-light">
            <span>Available Credit</span>
            <span>{availableCredit}</span>
          </div>
          <LinkButton text="View Transactions" />
        </div>
        <div className="border-l border-gray-300 pl-5">
          <div className="flex gap-6">
            <div>
              <h3 className="text-sm text-gray-600">Last Statement Balance</h3>
              <span className="mt-5 mb-15 block text-lg font-light">{lastStatement}</span>
              <LinkButton text="View Statements" />
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Minimum Amount Due</h3>
              <span className="mt-5 mb-13 block text-lg font-light">{minimumAmount}</span>
              <button
                type="button"
                className="
                  cursor-pointer rounded-md bg-blue-800 px-5 py-2 text-sm font-semibold text-white
                  hover:bg-blue-600
                "
              >
                Make a Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
