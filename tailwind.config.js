module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        width: 'width, min-width, max-width',
        margin: 'margin',
        widthMargin: 'width, min-width, max-width, margin'
      }
    },
    namedGroups: ['one', 'two', 'three', 'four']
  },
  variants: {
    extend: {
        accessibility: ['responsive', 'focus-within', 'focus'],
        alignContent: ['responsive', 'hover'],
        alignItems: ['responsive', 'hover'],
        alignSelf: ['responsive', 'group-hover', 'hover'],
        animation: ['responsive', 'group-hover', 'hover'],
        appearance: ['responsive', 'group-hover', 'hover'],
        backdropBlur: ['responsive', 'group-hover', 'hover'],
        backdropBrightness: ['responsive', 'group-hover', 'hover'],
        backdropContrast: ['responsive', 'group-hover', 'hover'],
        backdropFilter: ['responsive', 'group-hover', 'hover'],
        backdropGrayscale: ['responsive', 'group-hover', 'hover'],
        backdropHueRotate: ['responsive', 'group-hover', 'hover'],
        backdropInvert: ['responsive', 'group-hover', 'hover'],
        backdropOpacity: ['responsive', 'group-hover', 'hover'],
        backdropSaturate: ['responsive', 'group-hover', 'hover'],
        backdropSepia: ['responsive', 'group-hover', 'hover'],
        backgroundAttachment: ['responsive', 'group-hover', 'hover'],
        backgroundBlendMode: ['responsive', 'group-hover', 'hover'],
        backgroundClip: ['responsive', 'group-hover', 'hover'],
        backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
        backgroundImage: ['responsive', 'group-hover', 'hover'],
        backgroundOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
        backgroundPosition: ['responsive', 'group-hover', 'hover'],
        backgroundRepeat: ['responsive', 'group-hover', 'hover'],
        backgroundSize: ['responsive', 'group-hover', 'hover'],
        backgroundOrigin: ['responsive', 'group-hover', 'hover'],
        blur: ['responsive', 'group-hover', 'hover'],
        borderCollapse: ['responsive', 'group-hover', 'hover'],
        borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
        borderOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
        borderRadius: ['responsive', 'group-hover', 'hover'],
        borderStyle: ['responsive', 'group-hover', 'hover'],
        borderWidth: ['responsive', 'group-hover', 'hover'],
        boxDecorationBreak: ['responsive', 'group-hover', 'hover'],
        boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
        boxSizing: ['responsive', 'group-hover', 'hover'],
        brightness: ['responsive', 'group-hover', 'hover'],
        clear: ['responsive', 'group-hover', 'hover'],
        container: ['responsive', 'group-hover', 'hover'],
        contrast: ['responsive', 'group-hover', 'hover'],
        cursor: ['responsive', 'group-hover', 'hover'],
        display: ['responsive', 'group-hover', 'hover'],
        divideColor: ['responsive', 'dark', 'group-hover', 'hover'],
        divideOpacity: ['responsive', 'dark', 'group-hover', 'hover'],
        divideStyle: ['responsive', 'group-hover', 'hover'],
        divideWidth: ['responsive', 'group-hover', 'hover'],
        dropShadow: ['responsive', 'group-hover', 'hover'],
        fill: ['responsive', 'group-hover', 'hover'],
        filter: ['responsive', 'group-hover', 'hover'],
        flex: ['responsive', 'group-hover', 'hover'],
        flexDirection: ['responsive', 'group-hover', 'hover'],
        flexGrow: ['responsive', 'group-hover', 'hover'],
        flexShrink: ['responsive', 'group-hover', 'hover'],
        flexWrap: ['responsive', 'group-hover', 'hover'],
        float: ['responsive', 'group-hover', 'hover'],
        fontFamily: ['responsive', 'group-hover', 'hover'],
        fontSize: ['responsive', 'group-hover', 'hover'],
        fontSmoothing: ['responsive', 'group-hover', 'hover'],
        fontStyle: ['responsive', 'group-hover', 'hover'],
        fontVariantNumeric: ['responsive', 'group-hover', 'hover'],
        fontWeight: ['responsive', 'group-hover', 'hover'],
        gap: ['responsive', 'group-hover', 'hover'],
        gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
        grayscale: ['responsive', 'group-hover', 'hover'],
        gridAutoColumns: ['responsive', 'group-hover', 'hover'],
        gridAutoFlow: ['responsive', 'group-hover', 'hover'],
        gridAutoRows: ['responsive', 'group-hover', 'hover'],
        gridColumn: ['responsive', 'group-hover', 'hover'],
        gridColumnEnd: ['responsive', 'group-hover', 'hover'],
        gridColumnStart: ['responsive', 'group-hover', 'hover'],
        gridRow: ['responsive', 'group-hover', 'hover'],
        gridRowEnd: ['responsive', 'group-hover', 'hover'],
        gridRowStart: ['responsive', 'group-hover', 'hover'],
        gridTemplateColumns: ['responsive', 'group-hover', 'hover'],
        gridTemplateRows: ['responsive', 'group-hover', 'hover'],
        height: ['responsive', 'group-hover', 'hover'],
        hueRotate: ['responsive', 'group-hover', 'hover'],
        inset: ['responsive', 'group-hover', 'hover'],
        invert: ['responsive', 'group-hover', 'hover'],
        isolation: ['responsive', 'group-hover', 'hover'],
        justifyContent: ['responsive', 'group-hover', 'hover'],
        justifyItems: ['responsive', 'group-hover', 'hover'],
        justifySelf: ['responsive', 'group-hover', 'hover'],
        letterSpacing: ['responsive', 'group-hover', 'hover'],
        lineHeight: ['responsive', 'group-hover', 'hover'],
        listStylePosition: ['responsive', 'group-hover', 'hover'],
        listStyleType: ['responsive', 'group-hover', 'hover'],
        margin: ['responsive', 'group-hover', 'hover'],
        maxHeight: ['responsive', 'group-hover', 'hover'],
        maxWidth: ['responsive', 'group-hover', 'hover'],
        minHeight: ['responsive', 'group-hover', 'hover'],
        minWidth: ['responsive', 'group-hover', 'hover'],
        mixBlendMode: ['responsive', 'group-hover', 'hover'],
        objectFit: ['responsive', 'group-hover', 'hover'],
        objectPosition: ['responsive', 'group-hover', 'hover'],
        opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
        order: ['responsive', 'group-hover', 'hover'],
        outline: ['responsive', 'focus-within', 'focus', 'group-hover', 'hover'],
        overflow: ['responsive', 'group-hover', 'hover'],
        overscrollBehavior: ['responsive', 'group-hover', 'hover'],
        padding: ['responsive', 'group-hover', 'hover'],
        placeContent: ['responsive', 'group-hover', 'hover'],
        placeItems: ['responsive', 'group-hover', 'hover'],
        placeSelf: ['responsive', 'group-hover', 'hover'],
        placeholderColor: ['responsive', 'dark', 'focus', 'group-hover', 'hover'],
        placeholderOpacity: ['responsive', 'dark', 'focus', 'group-hover', 'hover'],
        pointerEvents: ['responsive', 'group-hover', 'hover'],
        position: ['responsive', 'group-hover', 'hover'],
        resize: ['responsive', 'group-hover', 'hover'],
        ringColor: ['responsive', 'dark', 'focus-within', 'focus', 'group-hover', 'hover'],
        ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus', 'group-hover', 'hover'],
        ringOffsetWidth: ['responsive', 'focus-within', 'focus', 'group-hover', 'hover'],
        ringOpacity: ['responsive', 'dark', 'focus-within', 'focus', 'group-hover', 'hover'],
        ringWidth: ['responsive', 'focus-within', 'focus', 'group-hover', 'hover'],
        rotate: ['responsive', 'hover', 'focus', 'group-hover', 'hover'],
        saturate: ['responsive', 'group-hover', 'hover'],
        scale: ['responsive', 'hover', 'focus', 'group-hover', 'hover'],
        sepia: ['responsive', 'group-hover', 'hover'],
        skew: ['responsive', 'hover', 'focus', 'group-hover', 'hover'],
        space: ['responsive', 'group-hover', 'hover'],
        stroke: ['responsive', 'group-hover', 'hover'],
        strokeWidth: ['responsive', 'group-hover', 'hover'],
        tableLayout: ['responsive', 'group-hover', 'hover'],
        textAlign: ['responsive', 'group-hover', 'hover'],
        textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
        textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
        textOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
        textOverflow: ['responsive', 'group-hover', 'hover'],
        textTransform: ['responsive', 'group-hover', 'hover'],
        transform: ['responsive', 'group-hover', 'hover'],
        transformOrigin: ['responsive', 'group-hover', 'hover'],
        transitionDelay: ['responsive', 'group-hover', 'hover'],
        transitionDuration: ['responsive', 'group-hover', 'hover'],
        transitionProperty: ['responsive', 'group-hover', 'hover'],
        transitionTimingFunction: ['responsive', 'group-hover', 'hover'],
        translate: ['responsive', 'hover', 'focus', 'group-hover', 'hover'],
        userSelect: ['responsive', 'group-hover', 'hover'],
        verticalAlign: ['responsive', 'group-hover', 'hover'],
        visibility: ['responsive', 'group-hover', 'hover'],
        whitespace: ['responsive', 'group-hover', 'hover'],
        width: ['responsive', 'group-hover', 'hover'],
        wordBreak: ['responsive', 'group-hover', 'hover'],
        zIndex: ['responsive', 'focus-within', 'focus', 'group-hover', 'hover'],
      }
  },
  plugins: [require('tailwindcss-named-groups')],
}
