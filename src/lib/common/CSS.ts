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
	link: {
		base: string;
		colors: Record<string, string>;
		disabled: string;
		loading: string;
	};
	spinner: {
		base: string;
		sizes: Record<string, string>;
	};
}

const CSSClasses: CSSClasses = {
	btn: {
		base: 'inline-flex justify-center items-center overflow-hidden text-center rounded w-auto transform scale-100 border border-transparent focus:shadow-outline focus:outline-none active:scale-95 active:shadow-none',
		colors: {
			primary: 'text-white bg-blue-600 focus:bg-blue-800 hover:bg-blue-800',
			secondary: 'text-white bg-gray-500 focus:bg-gray-700 hover:bg-gray-700',
			white: 'bg-white border-gray-300 focus:bg-gray-200 hover:bg-gray-200'
		},
		sizes: {
			sm: 'py-1 px-2 text-sm',
			base: 'py-2 px-4'
		},
		disabled: 'opacity-50 active:scale-100 cursor-not-allowed',
		loading: 'opacity-75 focus:shadow-none active:scale-100 cursor-wait',
		block: 'w-full',
		slot: {
			sizes: {
				sm: 'h-3 w-3',
				base: 'h-5 w-5'
			},
			left: {
				sizes: {
					sm: 'mr-1',
					base: 'mr-3'
				}
			},
			right: {
				sizes: {
					sm: 'ml-1',
					base: 'ml-3'
				}
			}
		}
	},
	link: {
		base: 'hover:underline',
		colors: {
			primary: 'text-blue-700 focus:text-black focus:bg-blue-200'
		},
		disabled: 'opacity-75 cursor-not-allowed',
		loading: 'cursor-wait'
	},
	spinner: {
		base: 'border-current rounded-full animate-spin',
		sizes: {
			sm: 'w-4 h-4 border-2',
			base: 'w-8 h-8 border-4'
		}
	}
};

export default CSSClasses;
