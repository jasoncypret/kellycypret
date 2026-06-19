/* @ds-bundle: {"format":3,"namespace":"KellyCypretDesignSystem_459a5e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"BlogCard","sourcePath":"components/realty/BlogCard.jsx"},{"name":"CommunityCard","sourcePath":"components/realty/CommunityCard.jsx"},{"name":"FeatureCard","sourcePath":"components/realty/FeatureCard.jsx"},{"name":"PropertyCard","sourcePath":"components/realty/PropertyCard.jsx"},{"name":"SearchBar","sourcePath":"components/realty/SearchBar.jsx"},{"name":"StatCounter","sourcePath":"components/realty/StatCounter.jsx"},{"name":"StepCard","sourcePath":"components/realty/StepCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/realty/TestimonialCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"0619101b9bcc","components/core/Button.jsx":"21edcd4e6c31","components/core/SectionHeading.jsx":"b18f18bfe2af","components/realty/BlogCard.jsx":"db61dcd22cc1","components/realty/CommunityCard.jsx":"7d7fe3e7c42a","components/realty/FeatureCard.jsx":"cde6bf3fbb9d","components/realty/PropertyCard.jsx":"78a455073aef","components/realty/SearchBar.jsx":"29be6590123a","components/realty/StatCounter.jsx":"71febf8ce7be","components/realty/StepCard.jsx":"85798fdf36a8","components/realty/TestimonialCard.jsx":"57bca062ce58","ui_kits/website/App.jsx":"898249f6584f","ui_kits/website/BlogPage.jsx":"c249c6369bac","ui_kits/website/Footer.jsx":"8d1ddf0cecb1","ui_kits/website/Hero.jsx":"3706f0e913e0","ui_kits/website/HomePage.jsx":"2aa9624d5b58","ui_kits/website/Nav.jsx":"cd598550c4ec"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KellyCypretDesignSystem_459a5e = window.KellyCypretDesignSystem_459a5e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kelly Cypret — Badge
 * Small status chip used on listing photos and meta rows.
 * `sale` is the coral accent; `sold`/`reduced` use the warm brand tones.
 */
function Badge({
  children,
  tone = "sale",
  style = {},
  ...rest
}) {
  const tones = {
    sale: {
      background: "var(--kc-coral)",
      color: "#fff"
    },
    sold: {
      background: "var(--kc-olive)",
      color: "#fff"
    },
    reduced: {
      background: "var(--kc-walnut)",
      color: "#fff"
    },
    neutral: {
      background: "var(--kc-cream)",
      color: "var(--kc-walnut)"
    },
    glass: {
      background: "rgba(255,255,255,0.85)",
      color: "var(--kc-walnut)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      lineHeight: 1,
      padding: "5px 11px",
      borderRadius: "var(--radius-xs)",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kelly Cypret — Button
 * Pill-shaped, uppercase, bold. The signature "primary" is a warm cream pill
 * with olive text (as on the live hero); "olive" and "ink" are the solid
 * variants; "outline" reads as a hairline pill on photos/dark sections.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconRight,
  disabled = false,
  onClick,
  type = "button",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 20px",
      fontSize: 12
    },
    md: {
      padding: "13px 30px",
      fontSize: 14
    },
    lg: {
      padding: "17px 40px",
      fontSize: 15
    }
  };
  const variants = {
    primary: {
      background: "var(--kc-cream)",
      color: "var(--kc-olive)",
      border: "1px solid var(--kc-cream)"
    },
    olive: {
      background: "var(--kc-olive)",
      color: "#fff",
      border: "1px solid var(--kc-olive)"
    },
    ink: {
      background: "var(--kc-ink)",
      color: "#fff",
      border: "1px solid var(--kc-ink)"
    },
    outline: {
      background: "transparent",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.85)"
    },
    "outline-olive": {
      background: "transparent",
      color: "var(--kc-olive)",
      border: "1px solid var(--kc-olive)"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    letterSpacing: "var(--tracking-button)",
    textTransform: "uppercase",
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.55 : 1,
    lineHeight: 1.1,
    textDecoration: "none",
    transition: "all var(--transition-base)",
    whiteSpace: "nowrap",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement("span", {
    className: `fa fa-${icon}`,
    "aria-hidden": "true"
  }), children, iconRight && /*#__PURE__*/React.createElement("span", {
    className: `fa fa-${iconRight}`,
    "aria-hidden": "true"
  }));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base,
      onClick: onClick
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: base,
    disabled: disabled,
    onClick: onClick
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/**
 * Kelly Cypret — SectionHeading
 * The recurring eyebrow + serif title block (e.g. "Properties → For Sale").
 * Flanking hairlines on the eyebrow when centered. `onDark` flips text white
 * and switches the eyebrow accent to soft gold.
 */
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  onDark = false,
  style = {}
}) {
  const centered = align === "center";
  const accent = onDark ? "var(--kc-gold)" : "var(--kc-olive)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: centered ? 640 : "none",
      margin: centered ? "0 auto" : 0,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      position: "relative",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: accent,
      padding: centered ? "0 64px" : 0,
      marginBottom: 14
    }
  }, centered && /*#__PURE__*/React.createElement(Rule, {
    side: "left",
    color: accent
  }), eyebrow, centered && /*#__PURE__*/React.createElement(Rule, {
    side: "right",
    color: accent
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--text-h1)",
      fontWeight: 700,
      lineHeight: 1.2,
      margin: 0,
      color: onDark ? "#fff" : "var(--text-heading)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-body)",
      marginTop: 14,
      marginBottom: 0,
      color: onDark ? "var(--text-on-dark-dim)" : "var(--text-body)"
    }
  }, description));
}
function Rule({
  side,
  color
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "50%",
      [side]: 0,
      width: 50,
      height: 1,
      background: color,
      transform: "translateY(-50%)"
    }
  });
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/realty/BlogCard.jsx
try { (() => {
/**
 * Kelly Cypret — BlogCard
 * A post preview: image, date + author meta, serif title, and optional
 * summary. Title underlines on hover.
 */
function BlogCard({
  image,
  date,
  author,
  title,
  summary,
  href = "#",
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "block",
      height: 200,
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "var(--radius-xs)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      marginBottom: 8
    }
  }, date, author && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 10
    }
  }, author)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 21,
      fontWeight: 400,
      lineHeight: 1.3,
      color: "var(--text-heading)",
      textDecoration: hover ? "underline" : "none"
    }
  }, title)), summary && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.7,
      color: "var(--text-body)",
      margin: 0
    }
  }, summary)));
}
Object.assign(__ds_scope, { BlogCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realty/BlogCard.jsx", error: String((e && e.message) || e) }); }

// components/realty/CommunityCard.jsx
try { (() => {
/**
 * Kelly Cypret — CommunityCard
 * Neighborhood tile: a full-bleed photo with a dark gradient foot and a
 * serif place name + tagline. The image lifts subtly on hover.
 */
function CommunityCard({
  image,
  name,
  tagline,
  href = "#",
  height = 320,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "block",
      position: "relative",
      height,
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      textDecoration: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transform: hover ? "scale(1.06)" : "scale(1)",
      transition: "transform 0.6s var(--ease-standard)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0) 55%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22,
      bottom: 20,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 26,
      fontWeight: 400,
      margin: 0,
      lineHeight: 1.1
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--kc-gold)"
    }
  }, tagline)));
}
Object.assign(__ds_scope, { CommunityCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realty/CommunityCard.jsx", error: String((e && e.message) || e) }); }

// components/realty/FeatureCard.jsx
try { (() => {
/**
 * Kelly Cypret — FeatureCard
 * A value-prop tile: a Flaticon real-estate glyph, a serif title, and copy.
 * Used in the four-up band on cream. `tone` shades alternating cells the way
 * the live site does (plain / darken / lighten).
 */
function FeatureCard({
  icon = "home",
  title,
  description,
  tone = "plain",
  style = {}
}) {
  const tones = {
    plain: {
      background: "var(--kc-cream)"
    },
    darken: {
      background: "#e9e2d6"
    },
    lighten: {
      background: "#f7f3ec"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "44px 28px",
      height: "100%",
      boxSizing: "border-box",
      ...tones[tone],
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: `fi flaticon-${icon}`,
    style: {
      fontSize: 44,
      color: "var(--kc-olive)",
      display: "inline-block",
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 21,
      fontWeight: 400,
      margin: "0 0 10px",
      color: "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14.5,
      lineHeight: 1.7,
      margin: 0,
      color: "var(--text-body)"
    }
  }, description));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realty/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/realty/PropertyCard.jsx
try { (() => {
/**
 * Kelly Cypret — PropertyCard
 * The signature listing card: photo with a status badge + price overlay, a
 * spec row (bed / bath / sqft via FontAwesome), address, and an agent note.
 * White surface, soft shadow that lifts on hover; the corner link button
 * morphs from a quarter-round to a full circle on hover.
 */
function PropertyCard({
  image,
  status = "For Sale",
  statusTone = "sale",
  price,
  oldPrice,
  beds,
  baths,
  sqft,
  address,
  location,
  agentNote,
  agentMeta,
  agentAvatar = "../../assets/images/kelly-thumb.jpg",
  href = "#",
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const tone = {
    sale: "var(--kc-coral)",
    sold: "var(--kc-olive)",
    reduced: "var(--kc-walnut)"
  }[statusTone] || "var(--kc-coral)";
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--surface-card)",
      boxShadow: hover ? "var(--shadow-card-hover)" : "var(--shadow-card)",
      transition: "all var(--transition-base)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "block",
      position: "relative",
      height: 250,
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 12,
      left: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: tone,
      color: "#fff",
      borderRadius: "var(--radius-xs)",
      fontSize: 13,
      fontWeight: 600,
      padding: "4px 11px"
    }
  }, status)), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "absolute",
      bottom: 12,
      left: 22,
      right: 22,
      margin: 0,
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, oldPrice && /*#__PURE__*/React.createElement(PriceChip, {
    strike: true
  }, oldPrice), price && /*#__PURE__*/React.createElement(PriceChip, null, price))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: 25
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      display: "flex",
      gap: 16,
      padding: 0,
      margin: "0 0 8px",
      color: "var(--text-body)",
      fontSize: 15
    }
  }, beds != null && /*#__PURE__*/React.createElement(Spec, {
    icon: "bed",
    value: beds
  }), baths != null && /*#__PURE__*/React.createElement(Spec, {
    icon: "bath",
    value: baths
  }), sqft != null && /*#__PURE__*/React.createElement(Spec, {
    icon: "arrows-alt",
    value: sqft
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 18,
      fontWeight: 600,
      margin: "0 0 2px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: "#000"
    }
  }, address)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, location), /*#__PURE__*/React.createElement("a", {
    href: href,
    "aria-label": "View listing",
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      width: 40,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: hover ? "var(--kc-coral)" : "var(--kc-olive)",
      color: "#fff",
      borderRadius: hover ? "50%" : "50% 0 50% 0",
      transition: "all var(--transition-base)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fa fa-link",
    style: {
      transform: "rotate(90deg)"
    }
  })), (agentNote || agentMeta) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 14,
      paddingTop: 14,
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      backgroundImage: `url(${agentAvatar})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "rgba(0,0,0,0.6)"
    }
  }, agentNote)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "rgba(0,0,0,0.6)"
    }
  }, agentMeta))));
}
function Spec({
  icon,
  value
}) {
  return /*#__PURE__*/React.createElement("li", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: `fa fa-${icon}`,
    style: {
      color: "var(--kc-olive)",
      fontSize: 14
    }
  }), value);
}
function PriceChip({
  children,
  strike = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontSize: 16,
      fontWeight: 600,
      background: "rgba(255,255,255,0.85)",
      borderRadius: "var(--radius-xs)",
      padding: "4px 8px",
      color: strike ? "rgba(0,0,0,0.4)" : "var(--kc-walnut)",
      textDecoration: strike ? "line-through" : "none"
    }
  }, children);
}
Object.assign(__ds_scope, { PropertyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realty/PropertyCard.jsx", error: String((e && e.message) || e) }); }

// components/realty/SearchBar.jsx
try { (() => {
/**
 * Kelly Cypret — SearchBar
 * The property search panel that overlaps the hero foot: a white card with
 * labelled fields (keyword, type, location, price) and an olive search button.
 * Presentational — wire `onSearch` to your own handler.
 */
function SearchBar({
  priceOptions = ["$100,000", "$200,000", "$300,000", "$400,000", "$500,000", "$750,000", "$1,000,000"],
  typeOptions = ["Residence", "Offices", "Commercial"],
  onSearch,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      boxShadow: "var(--shadow-card)",
      padding: 24,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr auto",
      gap: 18,
      alignItems: "end",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Keyword",
    icon: "search"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Enter Keyword",
    style: inputStyle
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Property Type",
    icon: "chevron-down"
  }, /*#__PURE__*/React.createElement("select", {
    style: inputStyle,
    defaultValue: typeOptions[0]
  }, typeOptions.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o)))), /*#__PURE__*/React.createElement(Field, {
    label: "Location",
    icon: "map-marker"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Location",
    style: inputStyle
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Price Limit",
    icon: "chevron-down"
  }, /*#__PURE__*/React.createElement("select", {
    style: inputStyle,
    defaultValue: priceOptions[0]
  }, priceOptions.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o)))), /*#__PURE__*/React.createElement("button", {
    onClick: onSearch,
    style: {
      height: 48,
      padding: "0 30px",
      background: "var(--kc-olive)",
      color: "#fff",
      border: "none",
      borderRadius: "var(--radius-pill)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-button)",
      textTransform: "uppercase",
      fontSize: 14,
      cursor: "pointer"
    }
  }, "Search"));
}
const inputStyle = {
  width: "100%",
  height: 40,
  border: "none",
  borderBottom: "1px solid var(--border-subtle)",
  padding: "0 24px 0 4px",
  fontFamily: "var(--font-sans)",
  fontSize: 14,
  color: "var(--text-heading)",
  background: "transparent",
  outline: "none",
  boxSizing: "border-box",
  appearance: "none"
};
function Field({
  label,
  icon,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-heading)",
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    className: `fa fa-${icon}`,
    style: {
      position: "absolute",
      right: 4,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--kc-olive)",
      fontSize: 13,
      pointerEvents: "none"
    }
  })));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realty/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/realty/StatCounter.jsx
try { (() => {
/**
 * Kelly Cypret — StatCounter
 * A single counting stat (e.g. "92,638 Homes"). Big serif number with an
 * optional prefix/suffix, a label, and an optional left divider rule for use
 * in a stat row.
 */
function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  divider = true,
  onDark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      paddingLeft: divider ? 24 : 0,
      borderLeft: divider ? "1px solid var(--border-subtle)" : "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 44,
      fontWeight: 400,
      lineHeight: 1,
      color: onDark ? "#fff" : "var(--text-heading)"
    }
  }, prefix, value, suffix), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: 1.3,
      color: onDark ? "var(--text-on-dark-dim)" : "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realty/StatCounter.jsx", error: String((e && e.message) || e) }); }

// components/realty/StepCard.jsx
try { (() => {
/**
 * Kelly Cypret — StepCard
 * A numbered process step ("How It Works"): a serif number nested in a soft
 * gold blob, then a title and description. Designed to sit on the olive
 * services band, so text defaults to white.
 */
function StepCard({
  number,
  title,
  description,
  onDark = true,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "8px 14px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 86,
      height: 78,
      margin: "0 auto 14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--kc-gold)",
      borderRadius: "42% 58% 63% 37% / 45% 38% 62% 55%"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--font-serif)",
      fontSize: 28,
      color: "var(--kc-walnut)"
    }
  }, number)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 22,
      fontWeight: 400,
      margin: "0 0 8px",
      color: onDark ? "#fff" : "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14.5,
      lineHeight: 1.7,
      margin: 0,
      color: onDark ? "var(--text-on-dark-dim)" : "var(--text-body)"
    }
  }, description));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realty/StepCard.jsx", error: String((e && e.message) || e) }); }

// components/realty/TestimonialCard.jsx
try { (() => {
/**
 * Kelly Cypret — TestimonialCard
 * A client quote with a leading quote mark, the testimonial copy, and an
 * avatar + name row. White card with soft shadow.
 */
function TestimonialCard({
  quote,
  name,
  location,
  avatar = "../../assets/images/kelly-thumb.jpg",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      boxShadow: "var(--shadow-card)",
      padding: "32px 30px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fa fa-quote-left",
    style: {
      color: "var(--kc-olive)",
      fontSize: 26,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.75,
      color: "var(--text-body)",
      margin: "14px 0 22px"
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 54,
      height: 54,
      borderRadius: "50%",
      backgroundImage: `url(${avatar})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 700,
      color: "var(--text-heading)"
    }
  }, name), location && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, location))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realty/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
/* Kelly Cypret website — app shell. Switches between Home and Blog. */
function App() {
  const [page, setPage] = React.useState("home");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, {
    page: page,
    onNavigate: setPage
  }), page === "home" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(HomePage, null)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Blog",
    crumbs: ["Home", "Blog"]
  }), /*#__PURE__*/React.createElement(BlogPage, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BlogPage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Kelly Cypret website — blog index page. */
function BlogPage() {
  const {
    BlogCard
  } = window.KellyCypretDesignSystem_459a5e;
  const posts = [{
    image: "../../assets/images/blog-selling.png",
    date: "January 15, 2026",
    author: "Kelly",
    title: "Thinking About Selling Your Home? How to Choose an Agent You Can Trust",
    summary: "Selling your home is more than a sign in the yard — it's about protecting your equity and avoiding costly surprises."
  }, {
    image: "../../assets/images/couch.jpg",
    date: "December 31, 2025",
    author: "Admin",
    title: "Staging Secrets That Help Homes Sell Faster",
    summary: "Small, intentional touches that help buyers picture themselves at home."
  }, {
    image: "../../assets/images/about-int.webp",
    date: "February 1, 2024",
    author: "Kelly Cypret",
    title: "Top 5 Tips for First-Time Home Buyers in Ellis County",
    summary: "Essential advice for first-time buyers navigating the Ellis County real estate market."
  }, {
    image: "../../assets/images/meadow-crest.jpg",
    date: "January 15, 2024",
    author: "Kelly Cypret",
    title: "Welcome to the Ellis County Real Estate Blog",
    summary: "Discover the latest insights, tips, and news about real estate in Ellis County, Texas."
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "kc-container",
    style: {
      padding: "84px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 26
    }
  }, posts.map((p, i) => /*#__PURE__*/React.createElement(BlogCard, _extends({
    key: i
  }, p)))));
}
window.BlogPage = BlogPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BlogPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Kelly Cypret website — footer (olive band with contact + social). */
function Footer() {
  const col = {
    color: "rgba(255,255,255,0.85)"
  };
  const head = {
    fontFamily: "var(--font-serif)",
    fontSize: 20,
    color: "#fff",
    margin: "0 0 18px",
    fontWeight: 400
  };
  const li = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
    color: "rgba(255,255,255,0.85)",
    fontSize: 15
  };
  return /*#__PURE__*/React.createElement("footer", {
    id: "contact",
    style: {
      background: "var(--kc-olive)",
      padding: "72px 0 56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kc-container",
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    alt: "Kelly Cypret",
    style: {
      height: 64,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      maxWidth: 320
    }
  }, "Embark on your real estate journey with confidence and ease. Let's turn your dreams into keys together!"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 18
    }
  }, ["instagram", "facebook", "twitter"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s,
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.12)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: `fa fa-${s}`
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: head
  }, "Connect With Me"), /*#__PURE__*/React.createElement("div", {
    style: li
  }, /*#__PURE__*/React.createElement("span", {
    className: "fa fa-chevron-right",
    style: {
      fontSize: 11,
      opacity: 0.7
    }
  }), "Realty Team"), /*#__PURE__*/React.createElement("div", {
    style: li
  }, /*#__PURE__*/React.createElement("span", {
    className: "fa fa-chevron-right",
    style: {
      fontSize: 11,
      opacity: 0.7
    }
  }), "Instagram"), /*#__PURE__*/React.createElement("div", {
    style: li
  }, /*#__PURE__*/React.createElement("span", {
    className: "fa fa-chevron-right",
    style: {
      fontSize: 11,
      opacity: 0.7
    }
  }), "Facebook")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: head
  }, "Contact Me"), /*#__PURE__*/React.createElement("div", {
    style: li
  }, /*#__PURE__*/React.createElement("span", {
    className: "fa fa-phone"
  }), "(469) 812-8100"), /*#__PURE__*/React.createElement("div", {
    style: li
  }, /*#__PURE__*/React.createElement("span", {
    className: "fa fa-envelope"
  }), "Kelly@NRRTsold.com"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Kelly Cypret website — hero + inner page header. */
function Hero() {
  const {
    Button
  } = window.KellyCypretDesignSystem_459a5e;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 760,
      backgroundImage: "url('../../assets/images/kelly-large.webp')",
      backgroundSize: "cover",
      backgroundPosition: "top center",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-hero)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "kc-container",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      color: "#fff",
      paddingTop: 80
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 60,
      fontWeight: 400,
      lineHeight: 1.1,
      margin: 0
    }
  }, "Welcome Home!", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 26,
      textTransform: "uppercase",
      opacity: 0.75,
      fontWeight: 300,
      fontFamily: "var(--font-sans)",
      marginTop: 10
    }
  }, "Texas Family Living in Vibrant DFW")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.85)",
      margin: "22px 0 28px"
    }
  }, "Welcome to your dream home search in the heart of DFW, Texas. Let me guide you through the process with personalized service and local expertise \u2014 so you find the perfect place to call home for your family's next chapter."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Explore Neighborhoods"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "See My Listings")))));
}

/* Compact inner-page header (blog) reusing the hero photo + dark overlay. */
function PageHeader({
  title,
  crumbs = []
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: 440,
      backgroundImage: "url('../../assets/images/kelly-large.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center 30%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-hero-strong)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      color: "#fff",
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      opacity: 0.7,
      marginBottom: 12
    }
  }, crumbs.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, c, i < crumbs.length - 1 ? "  ›  " : ""))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 58,
      fontWeight: 400,
      margin: 0
    }
  }, title)));
}
window.Hero = Hero;
window.PageHeader = PageHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
/* Kelly Cypret website — home page body, composing design-system components. */
function HomePage() {
  const NS = window.KellyCypretDesignSystem_459a5e;
  const {
    SectionHeading,
    SearchBar,
    StatCounter,
    FeatureCard,
    PropertyCard,
    CommunityCard,
    StepCard,
    TestimonialCard,
    BlogCard
  } = NS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kc-container",
    style: {
      marginTop: -44,
      position: "relative",
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement(SearchBar, null)), /*#__PURE__*/React.createElement("section", {
    className: "kc-container",
    style: {
      padding: "84px 24px 0",
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    title: "Your Ellis County Realtor"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.8,
      color: "var(--text-body)"
    }
  }, "Kelly, a former elementary teacher, channels her passion for education into real estate \u2014 guiding clients with care since 2021. With deep expertise in Ellis County, she helps families find their dream homes with integrity and dedication. As a valued member of Nolen Rodgers Realty, Kelly embodies hard work and exceptional service, so every client feels confident in their journey.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      height: 340
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: "url('../../assets/images/about-ext.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "var(--radius-sm)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: "url('../../assets/images/about-int.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "var(--radius-sm)"
    }
  }))), /*#__PURE__*/React.createElement("section", {
    className: "kc-container",
    style: {
      padding: "72px 24px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Stats",
    title: "Ellis County"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 30,
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(StatCounter, {
    value: "92,638",
    label: "Homes",
    divider: false
  }), /*#__PURE__*/React.createElement(StatCounter, {
    value: "250",
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "Sold", /*#__PURE__*/React.createElement("br", null), "Per Year")
  }), /*#__PURE__*/React.createElement(StatCounter, {
    value: "59",
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "Median Days", /*#__PURE__*/React.createElement("br", null), "on Market")
  }), /*#__PURE__*/React.createElement(StatCounter, {
    prefix: "$",
    value: "425,000",
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "Median", /*#__PURE__*/React.createElement("br", null), "Sale Price")
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kc-container",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 0
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "business",
    title: "Personalized Guidance",
    description: "From first-time buyers to seasoned investors, expert advice tailored to your needs at every budget.",
    tone: "plain"
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "home",
    title: "Luxury Living",
    description: "Explore exquisite properties with unmatched service and attention to detail.",
    tone: "darken"
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "stats",
    title: "Texas Real Estate",
    description: "In-depth knowledge of the Texas market ensures success for every client.",
    tone: "lighten"
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "bank",
    title: "Ellis County Specialist",
    description: "Insider knowledge and strategic insight to maximize your real-estate goals.",
    tone: "plain"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "kc-container",
    style: {
      padding: "84px 24px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Properties",
    title: "For Sale"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 26,
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(PropertyCard, {
    image: "../../assets/images/meadow-crest.jpg",
    status: "For Sale",
    statusTone: "sale",
    price: "$565,000",
    beds: 4,
    baths: 3,
    sqft: "2,910",
    address: "1105 Meadow Crest Ln",
    location: "Mansfield, TX",
    agentNote: "Just listed",
    agentMeta: "3 Days Ago"
  }), /*#__PURE__*/React.createElement(PropertyCard, {
    image: "../../assets/images/cedar-hill-mallard-pointe.jpg",
    status: "Sold",
    statusTone: "sold",
    oldPrice: "$529,900",
    price: "$499,900",
    beds: 5,
    baths: 4,
    sqft: "3,921",
    address: "811 Mallard Pointe Dr",
    location: "Cedar Hill, TX",
    agentNote: "What a deal!",
    agentMeta: "Last Month"
  }), /*#__PURE__*/React.createElement(PropertyCard, {
    image: "../../assets/images/longcanyon.jpeg",
    status: "Reduced",
    statusTone: "reduced",
    oldPrice: "$489,000",
    price: "$459,000",
    beds: 3,
    baths: 2,
    sqft: "2,105",
    address: "7330 Long Canyon Trail",
    location: "Dallas, TX",
    agentNote: "Reduced!",
    agentMeta: "2 Weeks Ago"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "kc-container",
    style: {
      padding: "0 24px 84px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Communities",
    title: "Explore Ellis County"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(CommunityCard, {
    image: "../../assets/images/waxahachie.webp",
    name: "Waxahachie",
    tagline: "Vibrant Community"
  }), /*#__PURE__*/React.createElement(CommunityCard, {
    image: "../../assets/images/midlothian.webp",
    name: "Midlothian",
    tagline: "Family-Friendly"
  }), /*#__PURE__*/React.createElement(CommunityCard, {
    image: "../../assets/images/maypearl.webp",
    name: "Maypearl",
    tagline: "Open Spaces"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--kc-olive)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kc-container",
    style: {
      padding: "80px 24px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Work Flow",
    title: "How It Works",
    onDark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(StepCard, {
    number: "01",
    title: "Let's Chat!",
    description: "Discuss your needs, preferences, and goals. This sets the stage for a tailored approach."
  }), /*#__PURE__*/React.createElement(StepCard, {
    number: "02",
    title: "Work Together",
    description: "I search and evaluate \u2014 location, price, and trends \u2014 to match your criteria."
  }), /*#__PURE__*/React.createElement(StepCard, {
    number: "03",
    title: "Seal the Deal",
    description: "Leave the bargaining to us. From offers to paperwork, we guide you to a smooth close."
  }), /*#__PURE__*/React.createElement(StepCard, {
    number: "04",
    title: "Beyond Closing",
    description: "My commitment extends past closing. Count on me for ongoing support."
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kc-container",
    style: {
      padding: "84px 24px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Testimonial",
    title: "Happy Clients"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 26,
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Kelly's expertise and attention to detail made selling our home a breeze. She went above and beyond \u2014 a smart, honest broker.",
    name: "Taylor Thompson",
    location: "Midlothian"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Kelly made our home buying experience seamless! Her knowledge of Ellis County helped us find the perfect neighborhood for our family.",
    name: "Lexa Abrego",
    location: "Waxahachie"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Working with Kelly was a pleasure from start to finish. Her professionalism and dedication exceeded our expectations.",
    name: "Elizabeth Crouch",
    location: "Red Oak"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "kc-container",
    style: {
      padding: "84px 24px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Social",
    title: "Recent Posts"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 26,
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(BlogCard, {
    image: "../../assets/images/blog-selling.png",
    date: "January 15, 2026",
    author: "Kelly",
    title: "Thinking About Selling Your Home?",
    summary: "How to choose an agent you can trust \u2014 and protect your equity."
  }), /*#__PURE__*/React.createElement(BlogCard, {
    image: "../../assets/images/about-int.webp",
    date: "February 1, 2024",
    author: "Kelly Cypret",
    title: "Top 5 Tips for First-Time Home Buyers",
    summary: "Essential advice for navigating the Ellis County market."
  }), /*#__PURE__*/React.createElement(BlogCard, {
    image: "../../assets/images/couch.jpg",
    date: "January 15, 2024",
    author: "Kelly Cypret",
    title: "Welcome to the Ellis County Real Estate Blog",
    summary: "The latest insights, tips and news for Ellis County, Texas."
  }))));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* Kelly Cypret website — top navigation. Transparent over the hero. */
function Nav({
  page,
  onNavigate
}) {
  const link = (key, label, href) => {
    const active = page === key;
    return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: href || "#",
      onClick: e => {
        if (onNavigate && key) {
          e.preventDefault();
          onNavigate(key);
        }
      },
      style: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 600,
        padding: "0 20px",
        opacity: active ? 1 : 0.85,
        borderBottom: active ? "2px solid var(--kc-gold)" : "2px solid transparent",
        paddingBottom: 6
      }
    }, label));
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 5,
      padding: "26px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kc-container",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("home");
    },
    "aria-label": "Kelly Cypret home"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    alt: "Kelly Cypret",
    style: {
      height: 84
    }
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      display: "flex",
      alignItems: "center",
      gap: 0,
      margin: 0,
      padding: 0
    }
  }, link("home", "Home"), link("blog", "Blog"), link(null, "Contact", "#contact"))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.BlogCard = __ds_scope.BlogCard;

__ds_ns.CommunityCard = __ds_scope.CommunityCard;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.PropertyCard = __ds_scope.PropertyCard;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.StatCounter = __ds_scope.StatCounter;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

})();
