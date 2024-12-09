# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line.
SPHINXOPTS    =
SPHINXBUILD   = sphinx-build
SOURCEDIR     = source
BUILDDIR      = ../website/static/api

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile

version:
	rm -rf $(BUILDDIR)/versions/${VERSION}/*
	$(SPHINXBUILD) -b html $(SOURCEDIR) $(BUILDDIR)/versions/${VERSION} -A current_version=${VERSION}
	rm -rf $(BUILDDIR)/versions/stable
	cp -R $(BUILDDIR)/versions/${VERSION} $(BUILDDIR)/versions/stable
	rm -rf $(BUILDDIR)/versions/latest/*
	$(SPHINXBUILD) -b html $(SOURCEDIR) $(BUILDDIR)/versions/latest -A current_version=latest
	@echo
	@echo "Versioned build finished. The HTML pages are in $(BUILDDIR)/versions/${VERSION} and $(BUILDDIR)/versions/stable."

latest:
	rm -rf $(BUILDDIR)/versions/latest/*
	$(SPHINXBUILD) -b html $(SOURCEDIR) $(BUILDDIR)/versions/latest -A current_version=latest
	@echo
	@echo "Latest build finished. The HTML pages are in $(BUILDDIR)/versions/latest."

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)
