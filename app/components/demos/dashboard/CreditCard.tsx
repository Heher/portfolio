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
      <div className="
        flex items-center gap-5 border-b border-gray-300 p-4
        sm:p-6
      "
      >
        <div className={`
          h-15 w-24 rounded-sm
          ${ccColor}
        `}
        />
        <h2 className="font-semibold">{ccName}</h2>
      </div>
      <div className="
        flex flex-col p-4
        sm:flex-row sm:px-6 sm:py-8
      "
      >
        <div className="sm:pr-8">
          <h3 className="text-sm text-gray-600">Current Balance</h3>
          <span className="
            mt-1 block text-2xl font-light
            sm:mt-5 sm:text-3xl
          "
          >
            {balance}
          </span>
          <div className="
            mt-5 mb-2 flex items-center gap-2 text-sm font-light
            sm:mb-5
          "
          >
            <span>Available Credit</span>
            <span>{availableCredit}</span>
          </div>
          <LinkButton text="View Transactions" />
        </div>
        <div className="
          mt-8 border-gray-300
          sm:mt-0 sm:border-l sm:pl-5
        "
        >
          <div className="
            flex flex-col gap-7
            sm:flex-row sm:gap-6
          "
          >
            <div>
              <h3 className="text-sm text-gray-600">Last Statement Balance</h3>
              <span className="
                mt-1 mb-3 block text-lg font-light
                sm:mt-5 sm:mb-15
              "
              >
                {lastStatement}
              </span>
              <LinkButton text="View Statements" />
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Minimum Amount Due</h3>
              <span className="
                mt-1 mb-8 block text-lg font-light
                sm:mt-5 sm:mb-13
              "
              >
                {minimumAmount}
              </span>
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
