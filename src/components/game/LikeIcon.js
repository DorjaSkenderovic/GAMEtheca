const Like = (props) => {
  return (
    <svg
      className={props.className}
      width="50px"
      height="50px"
      viewBox="-40 -40 480.00 480.00"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
    >
      <filter id="shadow">
        <feDropShadow dx="10" dy="10" stdDeviation="1" floodColor="#b98c94" />
      </filter>

      <g id="SVGRepo_bgCarrier" strokeWidth="0">
        <path
          transform="translate(-40, -40), scale(15)"
          d="M16,29.770299966136612C18.433661904625044,29.782857780678075,20.93970772503049,30.6236905313137,23.194738791401093,29.708429445921823C25.50184476210943,28.772032450618713,27.599357198316415,26.96739247757692,28.562705872162276,24.671409763031754C29.50231548584521,22.43200518397728,28.70817190107205,19.892928176539026,28.31892031136196,17.49578773536256C28.00597202070867,15.568548326833007,26.810239761574287,13.94389137519065,26.507539890629825,12.015015754902407C26.10865873688606,9.473250109452346,28.183158653625767,6.127946215744739,26.265732109434516,4.412383853476053C24.353006622494348,2.7010276272428038,21.262520656287414,5.226100109130038,18.70327670288181,5.032375282598553C16.668185075565503,4.878326751213765,14.932184648334253,3.286622388417925,12.894435275717198,3.4002286206128893C10.71696993978697,3.521624134641427,8.28698290665876,4.036052020739157,6.868083577881929,5.6921972000035375C5.4435046370536115,7.354971646001921,6.479863496998818,10.058777801301572,5.508515527959698,12.021104772007611C4.390663300155605,14.27940112491372,1.1792558067334604,15.339939282777614,0.8555021082580687,17.83887496892064C0.5431547353646002,20.249769424403862,2.5488129622941957,22.33086141812176,3.9120393831189375,24.34371677367977C5.283962857914402,26.36941365827149,6.612163916242994,28.63239702692167,8.844125576657278,29.634379579354682C11.052679802306542,30.62585395790293,13.579137102889298,29.75780819510036,16,29.770299966136612"
          fill={props.color}
          strokeWidth="0"
        ></path>
      </g>

      <g
        filter="url(#shadow)"
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={props.strokeColor}
        strokeWidth="80"
      >
        <path
          d="M135.36 78.428C199.156 -7.50982 315.513 130.863 233.749 187.503C170.214 231.519 95.621 162.912 125.451 103.218"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M210.661 157.109C205.399 169.569 201.574 157.65 194.317 158.797C186.726 159.996 187.977 164.393 179.867 165.491C176.102 166.001 176.205 159.558 169.245 159.558C162.629 159.558 159.447 165.968 154.1 149.076"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M195.291 117.469C195.553 113.433 195.109 109.379 194.816 105.346"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M171.194 116.892C170.927 113.029 171.272 109.077 171.668 105.346"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.503384"
          d="M152.101 133.489C150.438 135.197 148.831 136.961 147.102 138.541"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.503384"
          d="M143.53 124.107C141.867 125.815 140.261 127.579 138.531 129.159"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.503384"
          d="M151.388 128.582C148.233 131.426 145.157 134.305 142.104 137.242"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.503384"
          d="M148.529 125.551C145.06 128.346 142.106 131.711 138.531 134.21"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.503384"
          d="M224.23 139.984C222.567 141.692 220.96 143.456 219.23 145.036"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.503384"
          d="M215.661 130.459C213.998 132.166 212.391 133.93 210.662 135.51"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.503384"
          d="M223.518 134.932C220.364 137.776 217.288 140.654 214.234 143.591"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.503384"
          d="M220.66 131.901C217.191 134.696 214.236 138.061 210.662 140.561"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M188.699 229.714C158.513 253.492 128.663 308.156 119.194 346.837C111.96 348.183 106.562 348.857 103 348.857"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M191.834 229.714C201.535 232.936 210.699 238.491 219.448 243.569C244.372 258.036 263.911 275.658 276.771 300.28C283.49 313.144 284.111 327.83 284.111 341.846C284.111 343.442 283.372 347.055 285.16 348.291C286.729 349.376 296.095 348.556 296.345 348.613"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M176.704 340.496C162.605 321.139 134.155 269.032 155.786 247.293C167.563 235.456 179.071 265.554 181.934 270.769C183.292 273.242 184.13 280.124 186.117 278.126C186.664 277.578 187.311 271.805 187.512 271.119C188.895 266.393 191.379 261.736 193.787 257.454C200.274 245.92 209.114 235.274 216.798 224.517C230.552 205.264 256.143 211.055 257.589 235.029C259.494 266.616 229.073 285.549 208.779 304.406C199.895 312.66 190.587 324.983 178.796 328.933"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M135.36 78.428C199.156 -7.50982 315.513 130.863 233.749 187.503C170.214 231.519 95.621 162.912 125.451 103.218"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="11.599999999999998"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M210.661 157.109C205.399 169.569 201.574 157.65 194.317 158.797C186.726 159.996 187.977 164.393 179.867 165.491C176.102 166.001 176.205 159.558 169.245 159.558C162.629 159.558 159.447 165.968 154.1 149.076"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="11.599999999999998"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M195.291 117.469C195.553 113.433 195.109 109.379 194.816 105.346"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="11.599999999999998"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M171.194 116.892C170.927 113.029 171.272 109.077 171.668 105.346"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="11.599999999999998"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.503384"
          d="M152.101 133.489C150.438 135.197 148.831 136.961 147.102 138.541"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="11.599999999999998"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.503384"
          d="M143.53 124.107C141.867 125.815 140.261 127.579 138.531 129.159"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="11.599999999999998"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.503384"
          d="M151.388 128.582C148.233 131.426 145.157 134.305 142.104 137.242"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="11.599999999999998"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.503384"
          d="M148.529 125.551C145.06 128.346 142.106 131.711 138.531 134.21"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="11.599999999999998"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.503384"
          d="M224.23 139.984C222.567 141.692 220.96 143.456 219.23 145.036"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="11.599999999999998"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.503384"
          d="M215.661 130.459C213.998 132.166 212.391 133.93 210.662 135.51"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="11.599999999999998"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.503384"
          d="M223.518 134.932C220.364 137.776 217.288 140.654 214.234 143.591"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="11.599999999999998"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.503384"
          d="M220.66 131.901C217.191 134.696 214.236 138.061 210.662 140.561"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="11.599999999999998"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M188.699 229.714C158.513 253.492 128.663 308.156 119.194 346.837C111.96 348.183 106.562 348.857 103 348.857"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="11.599999999999998"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M191.834 229.714C201.535 232.936 210.699 238.491 219.448 243.569C244.372 258.036 263.911 275.658 276.771 300.28C283.49 313.144 284.111 327.83 284.111 341.846C284.111 343.442 283.372 347.055 285.16 348.291C286.729 349.376 296.095 348.556 296.345 348.613"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="11.599999999999998"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M176.704 340.496C162.605 321.139 134.155 269.032 155.786 247.293C167.563 235.456 179.071 265.554 181.934 270.769C183.292 273.242 184.13 280.124 186.117 278.126C186.664 277.578 187.311 271.805 187.512 271.119C188.895 266.393 191.379 261.736 193.787 257.454C200.274 245.92 209.114 235.274 216.798 224.517C230.552 205.264 256.143 211.055 257.589 235.029C259.494 266.616 229.073 285.549 208.779 304.406C199.895 312.66 190.587 324.983 178.796 328.933"
          stroke={props.strokeColor}
          strokeOpacity="0.9"
          strokeWidth="11.599999999999998"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};

export default Like;
