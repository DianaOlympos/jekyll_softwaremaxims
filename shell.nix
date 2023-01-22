{ pkgs ? import <nixpkgs> { } }:

with pkgs;
let
  node = nodejs-19_x;
  ruby = ruby_3_1;

in mkShell {
  buildInputs = [ node ruby libffi ];

  # Fix GLIBC Locale
  LOCALE_ARCHIVE = lib.optionalString stdenv.isLinux
    "${pkgs.glibcLocales}/lib/locale/locale-archive";
  LANG = "en_US.UTF-8";
}
