// import { useDispatch } from "react-redux";

// Action Types
const ADD_ACCOUNT = "ADD_ACCOUNT";
const LOGIN = "LOGIN";
const TRANSFER = "TRANSFER";
const LOAN = "LOAN";
const CLOSE_ACCOUNT = "CLOSE_ACCOUNT";
const LOGOUT = "LOGOUT";

// Actions
export const addAccount = (account) => ({
  type: ADD_ACCOUNT,
  payload: account,
});

export const login = (username, pin) => ({
  type: LOGIN,
  payload: { username, pin },
});

export const transfer = (to, amount) => ({
  type: TRANSFER,
  payload: { to, amount },
});

export const loan = (account, amount) => ({
  type: LOAN,
  payload: { account, amount },
});

export const closeAccount = (username, pin) => ({
  type: CLOSE_ACCOUNT,
  payload: { username, pin },
});

export const logout = () => ({
  type: LOGOUT,
});

const initialState = {
  logoutTimeout: null,
  isLoggedIn: false,
  accounts: [
    {
      owner: "Umashankar Chauhan",
      username: "uc",
      movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
      interestRate: 1.2, // %
      pin: 1111,
    },
    {
      owner: "Nirbhay Chauhan",
      username: "nc",
      movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
      interestRate: 1.5,
      pin: 2222,
    },
    {
      owner: "Chhaya Chauhan",
      username: "cc",
      movements: [200, -200, 340, -300, -20, 50, 400, -460],
      interestRate: 0.7,
      pin: 3333,
    },
    {
      owner: "Ramakant Chauhan",
      username: "rc",
      movements: [430, 1000, 700, 50, 90],
      interestRate: 1,
      pin: 4444,
    },
  ],
  currentAccount: null,
};

const rootReducer = (state = initialState, action) => {
  // const dispatch = useDispatch();
  switch (action.type) {
    case ADD_ACCOUNT:
      const newAccount = action.payload;
      const updatedAccounts = [...state.accounts, newAccount];
      console.log("Account added");
      return {
        ...state,
        accounts: updatedAccounts,
      };
    case LOGIN:
      const { username, pin } = action.payload;
      const currentAccount = state.accounts.find(
        (acc) => acc.username === username && acc.pin === pin
      );
      if (currentAccount) {
        return {
          ...state,
          currentAccount,
          isLoggedIn: true,
        };
      } else {
        console.log("Invalid credentials");
        return state;
      }

    case TRANSFER:
      const { to, amount } = action.payload;
      const transferAmount = Number(amount);
      const receiverAccIndex = state.accounts.findIndex(
        (acc) => acc.username === to
      );
      const senderAccIndex = state.accounts.findIndex(
        (acc) => acc.username === state.currentAccount.username
      );
      const senderAccount = state.accounts[senderAccIndex];
      const receiverAccount = state.accounts[receiverAccIndex];
      console.log(senderAccount);

      if (
        transferAmount > 0 &&
        receiverAccount &&
        senderAccount.movements.reduce((acc, mov) => acc + mov, 0) >=
          transferAmount &&
        receiverAccount.username !== senderAccount.username
      ) {
        const senderMovements = [...senderAccount.movements, -transferAmount];
        const receiverMovements = [
          ...receiverAccount.movements,
          transferAmount,
        ];
        const updatedSenderAccount = {
          ...senderAccount,
          movements: senderMovements,
        };
        const updatedReceiverAccount = {
          ...receiverAccount,
          movements: receiverMovements,
        };
        const updatedAccounts = [...state.accounts];
        updatedAccounts[senderAccIndex] = updatedSenderAccount;
        updatedAccounts[receiverAccIndex] = updatedReceiverAccount;

        console.log("Transfer done");
        return {
          ...state,
          accounts: updatedAccounts,
          currentAccount: updatedSenderAccount,
        };
      } else {
        console.log("Transfer not done");
        return state;
      }
    case LOAN:
      const loanAmount = Number(action.payload.amount);
      const loanReceiverAccIndex = state.accounts.findIndex(
        (acc) => acc.username === state.currentAccount.username
      );
      const loanReceiverAccount = state.accounts[loanReceiverAccIndex];

      if (
        loanAmount > 0 &&
        loanReceiverAccount.movements.some((mov) => mov >= loanAmount * 0.1)
      ) {
        // Add movement
        const loanReceiverMovements = [
          ...loanReceiverAccount.movements,
          loanAmount,
        ];
        const updatedLoanReceiverAccount = {
          ...loanReceiverAccount,
          movements: loanReceiverMovements,
        };

        const updatedAccounts = [...state.accounts];
        updatedAccounts[loanReceiverAccIndex] = updatedLoanReceiverAccount;
        console.log("loan approved");

        return {
          ...state,
          accounts: updatedAccounts,
          currentAccount: updatedLoanReceiverAccount,
        };
      } else {
        console.log("loan decline");
        return state;
      }

    case CLOSE_ACCOUNT:
      // const { username, pin } = action.payload;

      if (
        action.payload.username === state.currentAccount.username &&
        action.payload.pin === state.currentAccount.pin
      ) {
        const updatedAccounts = state.accounts.filter(
          (acc) => acc.username !== action.payload.username
        );

        console.log("Account closed");
        return {
          ...state,
          accounts: updatedAccounts,
          currentAccount: null,
          isLoggedIn: false,
        };
      } else {
        console.log("Invalid credentials");
        return state;
      }
    case LOGOUT:
      console.log("Logged out");
      return {
        ...state,
        currentAccount: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
export default rootReducer;
