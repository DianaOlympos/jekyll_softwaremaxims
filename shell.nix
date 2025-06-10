{
  pkgs ? import <nixpkgs> { },
}:

with pkgs;
let
  node = nodejs_24;
  ruby = ruby_3_3;

in
mkShell {
  buildInputs = [
    node
    ruby
    libffi
  ];

  # Fix GLIBC Locale
  LOCALE_ARCHIVE = lib.optionalString stdenv.isLinux "${pkgs.glibcLocales}/lib/locale/locale-archive";
  LANG = "en_US.UTF-8";
}
