import {defineConfig} from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
import iconsPlugin from '@windicss/plugin-icons'

const classNames = (classes: string[]): string => classes.join(' ')

const cx = (...classes: string[]): string => classNames(classes)

const isSingle = (classes: string[]): boolean =>
  classes.length === 1 && !classes[0].includes(' ')

const classes = (classes: string[]): string =>
  isSingle(classes) ? classes[0] : `(${classNames(classes)})`

const withPrefix = (prefix: string, classNames: string[]): string =>
  [prefix, classes(classNames)].join(':')

const prefixClasses =
  (prefix: string) =>
  (...classes: string[]): string =>
    withPrefix(prefix, classes)

const [
  not,
  active,
  focus,
  hover,
  sm,
  md,
  lg,
  disabled,
  placeholder,
  selection,
  svg,
  last,
] = [
  'not',
  'active',
  'focus',
  'hover',
  'sm',
  'md',
  'lg',
  'disabled',
  'placeholder',
  'selection',
  'svg',
  'last',
].map(prefixClasses)

export default defineConfig({
  extract: {
    include: ['src/**/*.svelte', 'src/**/*.ts'],
    exclude: ['node_modules', '.git', ' index.html'],
  },
  theme: {
    fontFamily: {
      sans: '"Neuzeit Office", sans-serif',
      serif: 'Montserrat, sans-serif',
    },
    extend: {
      colors: {
        brand: 'rgb(223, 91, 95)',
      },
      boxShadow: {
        'mantine-card':
          'rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px -5px',
      },
      borderRadius: {
        '2sm': '4px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.68, 0.34, 0, 0.88)',
      },
    },
  },

  shortcuts: {
    center: 'items-center justify-center',
    'true-center': 'center text-center',
    'no-tap-highlight': {
      WebkitTapHighlightColor: 'transparent',
    },
    'brand-ring': focus(
      'outline-none ring-2 ring-red-400 ring-offset-2 ring-offset-red-50'
    ),
    input: cx(
      'rounded-2sm text-gray-500 border-gray-200 bg-gray-50',
      'transition-all brand-ring highlight ease-smooth',
      focus('bg-white border-transparent')
    ),
    card: cx(
      'bg-white flex flex-col',
      'px-6 rounded-md shadow-mantine-card',
      cx('py-10'),
      cx('w-[80vw]', md('w-auto'))
    ),
    button: cx(
      'inline-flex svg-mr-2 true-center',
      'text-white transition-all no-tap-highlight bg-brand',
      'font-medium rounded-lg text-md px-6 h-12 select-none',
      'transform transition-transform ease-smooth duration-300',
      'brand-ring',
      disabled('opacity-40 pointer-events-none'),
      hover('scale-105'),
      active('scale-100 ring-0')
    ),
    form: cx('flex flex-col', 'mx-auto space-y-3'),
    alert: cx('p-4 text-sm rounded-lg', 'text-red-700 bg-red-100'),
    highlight: selection('bg-red-500/20'),
    heading: cx(
      'font-bold font-serif',
      'leading-tight highlight',
      cx('text-2xl', md('text-3xl'))
    ),
    paragraph: 'text-gray-700 text-md highlight',
    'absolute-center': 'absolute left-1/2 transform -translate-x-1/2',
    'all-uppercase': 'uppercase tracking-normal',
    'top-md': 'top-1/5 md:top-1/3',
    'full-screen': 'object-cover min-h-[100vh] min-w-[100vw]',
    'modal-button': 'button px-4 h-10 mt-2 max-w-[fit-content]',
    modal: cx(
      'bg-white flex-col max-w-md space-y-4  my-8 text-left w-full p-6',
      'rounded-2xl shadow-xl',
      'transform transition-all top-1/2 left-1/2',
      '-translate-x-1/2 -translate-y-3/4 inline-flex',
      'overflow-hidden align-middle fixed'
    ),
    'modal-title': cx('font-medium text-lg text-gray-900 leading-6'),
    'modal-description': cx('mt-2 text-sm text-gray-500'),
    overlay: cx('min-h-screen bg-black/40 text-center px-4 inset-0 fixed'),
  },
  plugins: [formsPlugin, iconsPlugin],
})
