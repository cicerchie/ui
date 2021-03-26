interface CSSClasses {
  btn: {
    base: string;
    colors: Record<string, string>;
    sizes: Record<string, string>;
    disabled: string;
    loading: string;
    block: string;
    slot: {
      sizes: Record<string, string>;
      left: {
        sizes: Record<string, string>;
      };
      right: {
        sizes: Record<string, string>;
      };
    };
  };
}

const CSSClasses: CSSClasses = {
  btn: {
    base:
      "inline-flex justify-center items-center overflow-hidden text-center rounded w-auto transform scale-100 border border-transparent focus:shadow-outline focus:outline-none active:scale-95 active:shadow-none",
    colors: {
      primary: "text-white bg-blue-600 focus:bg-blue-800 hover:bg-blue-800",
      secondary: "text-white bg-gray-600 focus:bg-gray-800 hover:bg-gray-800",
      white: "bg-white border-gray-300 focus:bg-gray-200 hover:bg-gray-200",
    },
    sizes: {
      sm: "py-1 px-2 text-sm",
      base: "py-2 px-4",
    },
    disabled: "opacity-50 active:scale-100 cursor-not-allowed",
    loading: "opacity-75 focus:shadow-none active:scale-100 cursor-wait",
    block: "w-full",
    slot: {
      sizes: {
        sm: "h-3 w-3",
        base: "h-4 w-4",
      },
      left: {
        sizes: {
          sm: "mr-1",
          base: "mr-3",
        },
      },
      right: {
        sizes: {
          sm: "ml-1",
          base: "ml-3",
        },
      },
    },
  },
};

export default CSSClasses;
