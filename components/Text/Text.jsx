const Text = (props) => {
  const {
    variant,
    className,
    children,
    font,
    color,
    weight,
    size,
    align,
    ...rest
  } = props;

  const classes = [
    font || 'primary',
    weight || 'medium',
    size || 'md',
    color || null,
    className || null,
  ];

  if (variant == 'p' || variant == undefined) {
    return <p className={classes.join(' ')}>{children}</p>;
  }
  if (variant == 'a') {
    return (
      <a
        className={classes.join(' ')}
        href={props.href}
        rel='noreferrer'
        target={'_blank'}
      >
        {children}
      </a>
    );
  }
};

export default Text;
